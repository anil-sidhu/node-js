const express = require('express');
const reqFilter= require('./middleware');
const app = express();
const route= express.Router();


// app.use(reqFilter);
route.use(reqFilter)
app.get('/', (res, resp) => {
    resp.send('Welcome to Home page')
});

app.get('/users', (res, resp) => {
    resp.send('Welcome to Users page')
});

route.get('/about', (res, resp) => {
    resp.send('Welcome to About page')
});
route.get('/contact', (res, resp) => {
    resp.send('Welcome to contact page')
});

app.use('/',route);

app.listen(5000)