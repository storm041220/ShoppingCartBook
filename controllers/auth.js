const bcrypt = require('bcryptjs');
const cookie = require('js-cookie');
const jwt = require('jsonwebtoken');
const config = require('../config');
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
        const token = signToken(email,'customer');
        res.cookie('token', token);
        res.redirect('/home');
    }catch (err) {
        console.log(err);
    }
}
const getLoginPage = async (req, res) => {
    return res.render('login',{
        style: 'login.css',
        js: 'login.js'
    })
}

const postLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await Users.findOne({emailId: email});
        if (!user){
            return res.render('login',{
                style: 'login.css',
                js:'login.js',
                message_email: 'email not exists!'
            })
        }
        let isCorrectPass =await bcrypt.compare(password,user.password);
        if (!isCorrectPass){
            return res.render('login',{
                style: 'login.css',
                js:'login.js',
                message_password: 'incorrect password!'
            })
        }
        const auth = await Authorities.findOne({emailId: email});
        const token = signToken(email,auth.authorities);
        if (auth.authorities !== 'admin'){
            res.cookie('token', token);
            return res.redirect('/home')
        }else {
            res.cookie('token', token);
            return res.redirect('/admin');
        }

    }catch (err) {
        console.log(err);
    }
}
const signToken = (email,role) =>{
    return jwt.sign({email: email, role: role},config.AUTH_TOKEN_SECRET.TOKEN);
}
const checkRoleAdmin = (req, res, next) => {
    try {
        const cookie = req.cookies.token;
        const user = jwt.verify(cookie,config.AUTH_TOKEN_SECRET.TOKEN);
        if (user.role === "admin"){
            return next();
        }else {
            return res.redirect('/home');
        }
    }catch (err) {
        console.log(err);
    }
}
const checkIsLogin = (req, res, next) =>{
    try {
        const cookie = req.cookies.token;
        if (!cookie){
            return next();
        }else {
            const user = jwt.verify(cookie,config.AUTH_TOKEN_SECRET.TOKEN);
            if (user.role === "admin"){
                return res.redirect('/admin');
            }else {
                return res.redirect('/home');
            }
        }
    }catch (err) {
        console.log(err);
    }
}
const isAuthenticated = (req, res, next) =>{
    try {
        const cookie = req.cookies.token;
        if (!cookie){
            req.user = 0;
            return next();
        }else {
            const user = jwt.verify(cookie,config.AUTH_TOKEN_SECRET.TOKEN);
            req.user = user;
            return next();
        }
    }catch (err) {
        console.log(err);
    }
}
const logoutUser = (req, res) =>{
    res.clearCookie("token");
    res.redirect('/home');
}
module.exports = {
    getRegister,
    createUser,
    getLoginPage,
    postLogin,
    checkRoleAdmin,
    checkIsLogin,
    isAuthenticated,
    logoutUser
}
