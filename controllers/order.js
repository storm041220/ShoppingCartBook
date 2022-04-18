
const getPageOrder = async (req, res) => {
    try {
        const listOrder = [
            {
                _id: 1,
                totalPrice: 400,
                status: 'new',
                orderDetail: [
                    {
                        _id: 1,
                        quantity: 2,
                        price: 200,
                        product: {
                            _id: 1,
                            name: 'The Overdue Life of Amy Byler',
                            image: 'https://res.cloudinary.com/awi-ln/image/upload/v1649778956/img2_vbuupb.jpg',
                            manufacturer: 'Lam Lam'
                        }
                    }
                ]
            },
            {
                _id: 1,
                totalPrice: 400,
                status: 'new',
                orderDetail: [
                    {
                        _id: 1,
                        quantity: 2,
                        price: 200,
                        product: {
                            _id: 1,
                            name: 'The Overdue Life of Amy Byler',
                            image: 'https://res.cloudinary.com/awi-ln/image/upload/v1649778956/img2_vbuupb.jpg',
                            manufacturer: 'Lam Lam'
                        }
                    }
                ]
            }
        ]
        return res.render('order',{
            style: 'order.css',
            listOrder: listOrder
        })
    }catch (err) {
        console.log(err);
    }
}
module.exports = {
    getPageOrder
}
