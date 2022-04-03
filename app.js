const express = require('express');
const cors  = require('cors');
const { engine , create} = require('express-handlebars');
const bodyParser = require('body-parser')
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));
//router
const homeRouter = require('./routers/home');
const registerRouter = require('./routers/register');

app.get('/health', (req, res) => res.send('Book Shop'));
app.use('/', homeRouter);
app.use('/auth/register',registerRouter);
module.exports = app;
