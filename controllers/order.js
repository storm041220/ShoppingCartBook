const {Cart, CartItem, ShippingAddress, Products, Customers, Order, OrderDetail} = require('../models');
const getPageOrder = async (req, res) => {
    try {
        const user = req.user;
        let username;
        let listOrder = [];
        if (user !== 0 ){
            const customer = await Customers.findOne({userEmailId: user.email});
            username = customer.firstName + " "+customer.lastName;
            const orders = await Order.find({customer_id: customer._id});
            for (let item of orders){
                listOrder.push(await formatItemOrder(item._id));
            }
        }else {
            return res.redirect('/auth/login');
        }
        return res.render('order',{
            username: username,
            style: 'order.css',
            listOrder: listOrder,
            active_order: 'active-nav'
        })
    }catch (err) {
        console.log(err);
    }
}
const postOrder = async (req, res, next) => {
    try {
        const user = req.user;
        const customer = await Customers.findOne({userEmailId: user.email});
        const {array, totalPrice} = req.body;
        let arr_quantity = array.split(',').map(Number);
        const newOrder = new Order({
            totalPrice: Number(totalPrice),
            customer_id: customer._id,
            shippingAddress_id: customer.shippingAddressId,
            status: 'Orders placed'
        });
        const order = await newOrder.save();
        const cartItem = await CartItem.find({cart_id: customer.cartId});
        let i = 0;
        for (let item of cartItem){
            const newOrderDetail = new OrderDetail({
                quantity: arr_quantity[i],
                order_id: order._id,
                product_id: item.product_id
            });
            await newOrderDetail.save();
            await CartItem.remove({_id: item._id});
            i++;
        }
        await Cart.updateOne(
            {_id: customer.cartId},
            {
                $set: ({totalPrice: 0})
            }

        );
        return next();
    }catch (err) {
        console.log(err);
    }
}
const formatItemOrder = async (order_id) =>{
    let listDetail = [];
    const order = await Order.findOne({_id: order_id});
    const orderDetail = await OrderDetail.find({order_id: order_id});
    for (let item of orderDetail){
        const product = await Products.findOne({_id: item.product_id});
        listDetail.push({
            _id: item._id,
            quantity: item.quantity,
            price: Number(item.quantity*product.price),
            product: {
                _id: product._id,
                name: product.name,
                image: product.image,
                manufacturer: product.manufacturer
            }
        })
    }
    return {
        _id: order_id,
        totalPrice: order.totalPrice,
        status: order.status,
        orderDetail: listDetail
    }
}
module.exports = {
    getPageOrder,
    postOrder
}
