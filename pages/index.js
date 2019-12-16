import React from 'react';
import Link from 'next/link';
import css from '../style.css';
import Img from '../public/live';
// import imge from '../image/codealter.png';
// for guide...
const hd = {
  pathname: '/index',
  query: {name: 'index'},
}
const a = {
  pathname: '/index',
}

// for email...
const email = {
  pathname: '/email',
  query: {name: 'email'},
}
const ema = {
  pathname: '/email',
}


// for toogle...
const toogle = {
  pathname: '/toogle',
  query: {name: 'toogle'},
}
const too = {
  pathname: '/toogle',
}

function Guide() {
  return (
    <div className={css.App}>
      <header className={css.Appheader}>
      <nav className={css.head1}>
      {/* <h2>Single Signon</h2> */}
     <div className={css.col}>
      <li className={css.navi}>
        <Link href={email} as={ema}>
        <a>Contact</a>
        </Link>
        </li></div>

      <div className={css.col1}>
      <li className={css.navi}>
        <Link href={hd} as={a}>
        <a>Guide</a>
        </Link>
        </li></div>


      <div className={css.col2}>
      <li className={css.navi}>
        <Link href={toogle} as={too}>
        <a>Config</a>
        </Link>
        </li></div>
      </nav>

     <h5>STEP 1:</h5>
          <h6>Login to your shop admin and go the the SETTINGS>CHECKOUTPAGES. scroll down to the customer accounts
         section and ensure that you have either Accounts are optional selected or Accounts are required
     </h6>
     <br></br>
     <img src="https://help.shopify.com/assets/api/tutorials/customer-accounts-4c4f064e2436fa7ae0a6217232e7a8bd4d6a7d859cb2b975da9cd91de96d7b7f.png" height="550px" width="1050px" alt="" />
     <h5>STEP 2)</h5>
     
     <h6>
     Log in to your shop admin and go to the Apps > Single Signon. Click on the Config menu item . In this tab,
      you can enable or disable the social network.
     </h6>
     <br></br>
     <h5>STEP 3)</h5>
     <br></br>
     <h6>Log in to your shop admin and go to the Online Store > Themes. In the Templates folder,
          insert the embbed code ***************** into the customers/login.liquid file.
          Of course, you also can put this code to other template file, section or page.</h6>
          <br></br>
          
          <Img />
      </header>
    </div>
  );
}

export default Guide;