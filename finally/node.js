const express = require('express');
const cors = require('cors');
const app = express();



app.use(cors());
 
const postData ={
    "customer": {
        "first_name": 'sr',
        "last_name": 's',
        "email": 'srithar@email.com',
        "phone": '',
        "addresses": []
      }
}

  
 app.put('/', async (req,res)=>{
  
        const response = await fetch('https://sociallog.myshopify.com/admin/api/2019-10/customers.json', {
          method: 'POST',
          headers:{
            'X-Shopify-Access-Token': '99a59599d5a56df724f85914fd531e90',
            },
          mode: 'cors',
          
          crossDomain: true,
          body: postData,
          }).then(response=> {
          console.log('Ok', response)
          })
        .catch(error => {
          console.log('Not Ok', error)
        });
        console.log(response)
    
 })
   app.get('/products/movies/video', (req,res)=>{
      return(fetch('http://localhost:3000/').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      }))
 })
 app.get('/products/movies/images', (req,res)=>{
  
 })

app.listen(3000, ()=>{
    console.log(`connecting database enter port 3000`)
});