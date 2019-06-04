const express = require('express');
const morgan = require('morgan');
const port =3010;
const parser = require('body-parser');
// let count =0;
const ejs = require('ejs');
const app =express();

app.set('view engine', 'ejs');
app.set('views' , './views')
const mongoose = require('mongoose');

// app.get("*", function(req, res,next) {
//   count++;
//   next ();
// });
 app.use(morgan('dev'));
 app.use(parser.json());
 app.use(parser.urlencoded({extended:true}))

 const user = require('./routes/users')
 const product = require('./routes/product')

 app.use('/users',user);

 app.use('/product', product);


 mongoose.connect("mongodb+srv://Aman:Aman@cluster0-4cm2y.mongodb.net/test?retryWrites=true" , function(err){
     if(err)
     {
         console.log(err);
     }else {
         console.log("Atlas connected");
     }
 });
app.get('/' , function(req ,res)
{
    res.send("Hello world");
});

// app.get("/test", function(req, res)  {
//   res.send('esting').status(200);
// });

// app.get('/count', function(rwq,res){
//     res.send(count.toString());
// })

app.listen(port , function (){
    console.log(`Server is running ${port}`);
});