const express = require('express');
const cors  = require('cors');
const hbs = require('hbs');
const cookieParser = require('cookie-parser')
const { engine , create} = require('express-handlebars');
const bodyParser = require('body-parser')
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
//router
const homeRouter = require('./routers/home');
const registerRouter = require('./routers/register');
const loginRouter = require('./routers/login');
const adminRouter = require('./routers/admin');
const shopRouter = require('./routers/shop');
const productDetailRouter = require('./routers/product-detail');
const cartRouter = require('./routers/cart');
const logoutRouter = require('./routers/logout');
const orderRouter = require('./routers/order');

app.get('/health', (req, res) => res.send('Book Shop'));
app.get('/', (req, res) => res.redirect('/home'));
app.use('/', homeRouter);
app.use('/auth/register',registerRouter);
app.use('/auth/login',loginRouter);
app.use('/admin',adminRouter);
app.use('/shop',shopRouter);
app.use('/product-detail', productDetailRouter);
app.use('/cart',cartRouter);
app.use('/auth/logout', logoutRouter);
app.use('/order', orderRouter);
module.exports = app;
