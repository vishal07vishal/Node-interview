//Que:-1-
// const express=require('express')
// const app =express()

// app.get('/',(req,res)=>{
//     res.send('<h1>Hello world')
// })

// app.listen(2022,()=>{
//     console.log('server started')
// })


// Que:-2

// We have to create function.js file -- Here export the file
// function add(x, y) {
//      return x + y;
//   }
    
//   function subtract(x, y) {
//      return x - y;
//   }
//   module.exports = { add }

// we have import the file in main.js--- here i am importing

// const f = require('./function');
// const result = f.add(10, 5);
  
// console.log('The result is:', result);



//Que:3-
// const express = require('express')
//      const app = express()
     

//      const middleware1 = ((req,res,next)=>{
//           console.log('I am Global middleware');
//           next();
//      })
     
//      app.use(middleware1);

//      app.get('/',(req,res)=>{
//           console.log('I am in middleware1');
//           res.end();
//      })

//      app.listen(2000 , ()=>{
//           console.log(`Connected `);
//      })


     //@ue:4-

     const express = require('express')
     const cors = require('cors')
     const app = express()
     
     app.get('/products/:id', cors(), function (req, res, next) {
       res.json({msg: 'This is CORS-enabled for a Single Route'})
     })
     
     app.listen(8080, function () {
       console.log('CORS-enabled web server listening on port 80')
     })