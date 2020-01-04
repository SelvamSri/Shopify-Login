const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const sel = '';
const selectall = 'SELECT * FROM admin_videos';
const selectMovie = 'SELECT video FROM admin_vieos';
const selectimage = 'SELECT video_baseurl FROM admin_videos';
const select = 'SELECT resize_img FROM admin_videos WHERE category_id ="10"';
const connection = mysql.createConnection({
    host: 'ls-42ed77ad3f9263bb4a33a0be99f546451deb81a7.c9qlahpcmszm.ap-south-1.rds.amazonaws.com',
    database: 'wdbs',
    user: 'dbmasteruser',
    password: 'CaNakYaaTelevision**',
});
const conn = "";
connection.connect(err => {
    if(err){
        return err;
    }
})

app.use(cors());
 

  
 app.post('/products', function(req,res){
           
         
       
            return res.json({
                
       })
   
 })
 app.get('/products', function(req,res){
return res.json({
    
})
 })
 app.get('/products/movies/images', (req,res)=>{
 return(req.fetch('https://sociallog.myshopify.com/admin/api/2019-10/customers.json', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': 'f1643ca223c854eb44daab273284964c'
  },
  body: JSON.stringify({
    "customer": {
      "first_name": 'selva',
      "last_name": 'srim',
      "email": 'selvamsrii@gmail.com',
      "phone": '',
      "addresses": []
    }
  })
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
 )})

app.listen(888, ()=>{
    console.log(`connecting database enter port 888`)
});