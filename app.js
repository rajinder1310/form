var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('form.ejs');
});

app.listen(2000);