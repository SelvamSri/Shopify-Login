require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

//added......

const express = require('express');
const cors = require('cors');

const app = express();
 

dotenv.config();
app.use(cors());



const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== 'production';
const apps = next({ dev });
const handle = apps.getRequestHandler();
const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;



var accessToke = {};
//added......

// fetch('https://sociallog.myshopify.com/admin/api/2019-10/customers.json', {
//   afterAuth(MmS) {
//     const { shop, accessToken } = MmS.session;
//       console.log(`accessToken: ${accessToken}`);
//         console.log(`shop: ${shop}`);
//       MmS.cookies.set('shopOrigin', shop, { httpOnly: false });
//     MmS.redirect('/');
//   },
//   method: 'POST',
//   headers: {
//       'Content-Type': 'application/json',
//       'X-Shopify-Access-Token': 'f1643ca223c854eb44daab273284964c'
//   },
//   body: JSON.stringify({
//     "customer": {
//       "first_name": 'selva',
//       "last_name": 'srim',
//       "email": 'selvamsrii@gmail.com',
//       "phone": '',
//       "addresses": []
//     }
//   })
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })





//old.......

apps.prepare().then(() => {
  const server = new Koa();
  server.use(session(server));
  server.keys = [SHOPIFY_API_SECRET_KEY];
   
  const postData =  {
    "customer": {
       "first_name": 'srima',
         "last_name": 's',
           "email": 'srima@gmail.com',
         "phone": '',
      "addresses": []
    }
  }
 
 





  server.use(
createShopifyAuth({
   apiKey: SHOPIFY_API_KEY,
     secret: SHOPIFY_API_SECRET_KEY,
        scopes: ['write_themes','write_script_tags','read_customers','write_customers','unauthenticated_write_customers','unauthenticated_read_customers'],
          afterAuth(MmS) {
           const { shop, accessToken } = MmS.session;
           const accessToke=accessToken
             console.log(`accessToken: ${accessToken}`);
             console.log(`helloo nanbaaaa vanakaam ${accessToke}`)
               console.log(`shop: ${shop}`);
               MmS.cookies.set('shopOrigin', shop, { httpOnly: false });
           
fetch(`https://${shop}/admin/api/2019-10/customers.json`, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': accessToken,
  },
  body: JSON.stringify({
    "customer": {
      "first_name": 'sel',
      "last_name": 'sri',
      "email": 'selvamm341@gmail.com',
      "phone": '',
      "addresses": []
    }
  })
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})


// fetch('http://dummy.restapiexample.com/api/v1/create', {
//   method: 'POST',
//   headers: {
//       'Content-Type': 'application/json',
//       // 'X-Shopify-Access-Token': accessToken,
//   },
//   body: JSON.stringify({
//     "age": accessToken,
//     "name": shop
//   }),
  
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

MmS.redirect('/');
       },
    }),
  );
// server.use(async (MmS) => {
  
// });

  //  server.use(fetch(`https://${afterAuth.shop}/admin/api/2019-10/customers.json`))



  server.use(verifyRequest());
  server.use(async (MmS) => {
    await handle(MmS.req, MmS.res);
    MmS.respond = false;
    MmS.res.statusCode = 200;
    return
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
