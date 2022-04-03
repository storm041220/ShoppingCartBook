const bcrypt = require('bcryptjs');
const {Users, Customers, Authorities} = require('../models');
const getRegister = async (req, res) => {
    res.render('register',{
        style: 'register.css',
        js:'register.js'
    });
}
const createUser = async (req, res) => {
    try{
        const {first_name, last_name, phone, email, password} = req.body;
        const user_email = await Users.findOne({emailId: email});
        if (user_email){
            return res.render('register',{message: 'email exists!',
                style: 'register.css',
                js:'register.js'});
        }
        const hashPassword = await bcrypt.hash(password,10);
        const userNew = new Users({
            emailId: email,
            password: hashPassword
        });
        const user = await userNew.save();
        const authorities = new Authorities({
            emailId: email,
            authorities: 'customer'
        })
        await authorities.save();
        const newCustomer = new Customers({
            firstName: first_name,
            lastName: last_name,
            customerPhone: phone,
            shippingAddressId: null,
            billingAddressId: null,
            userEmailId: email,
            cartId: null
        })
        await newCustomer.save();
        res.redirect('/home');
    }catch (err) {
        console.log(err);
    }
}
module.exports = {
    getRegister,
    createUser
}
