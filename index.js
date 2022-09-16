const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// router.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/viewer.html'));
//   //__dirname : It will resolve to your project folder.
// });

// //add the router
// app.use('/', router);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // res.setHeader('Content-Type', 'application/javascript');
  
    // Pass to next layer of middleware
    next();
  });
app.use(express.static('public'));
app.use('/', express.static(path.join(__dirname, './public')));
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');