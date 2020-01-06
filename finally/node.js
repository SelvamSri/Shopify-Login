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

  
 app.post('/', async (req,res)=>{
    return(postData)
 })
   app.get('/products', (req,res)=>{
      return(res)
 })
 app.post('/products', (req,res)=>{
  
 })

app.listen(3000, ()=>{
    console.log(`connecting database enter port 3000`)
});