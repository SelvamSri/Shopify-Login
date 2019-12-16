import React, { Component } from 'react';
import css from '../style.css';
import Live from './codealter';
import Google from './google';
import Link from 'next/link'
// import amz from '/logos/amazon_logo.png';
// import amz from '.././logos/amazon_logo.png';
// import google from '.././logos/google_logo.png';
// import live from '../image/live.png'
import Switch from "react-ios-switch";
import { cs } from 'date-fns/esm/locale';
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

 class Toogle extends Component {
 
  constructor(props){
    super(props);
    this.sec = [];
    this.state = {checked: true,check: true,amazon: false}
    this.handleChange=this.handleChange.bind(this);
    console.log(this.state.checked)
    console.log(this.state.check)
    console.log(this.state.amazon)
  }
  render(){
    const { checked } = this.state;
    const { check } = this.state;
    const { amazon } = this.state;
  return (
    <div className={css.App1}>
           <nav className={css.head1}>
      {/* <h2>Single Signon</h2> */}
      
      
     <div className={css.col}>
     
      <li className={css.navi}>
       
      <Link  href={email} as={ema}>
        <a>
          Contact
          </a>
          </Link>
         
          </li>
          
          </div>

      <div className={css.col1}>
      <li className={css.navi}>
        <Link href={hd} as = {a}>
          <a>
        Guide
        </a>
        </Link>
        </li></div>


      <div className={css.col2}>
      <li className={css.navi}>
        <Link href={toogle} as={too}>
        <a>
        Config
        </a>
        </Link>
        </li></div>
      </nav>

      <div className={css.Fb}>
        <h5 className={css.face}>FACEBOOK</h5>
        <Switch
        checked={checked}
        className="switch"
        onChange={checked => this.setState({ checked })}
      />

  </div>
  <div className={css.Fb1}>
        <h5>GOOGLE</h5>
        <Switch
        checked={check}
        className="switch1"
        onChange={check => this.setState({ check })}
      />
  </div>

  <div className={css.Fb2}>
        <h5>AMAZON</h5>
        <Switch
        checked={amazon}
        className="switch2"
        onChange={amazon => this.setState({ amazon })}
      />
  </div>
<button className={css.tooglebutton} onClick={this.handleChange}>Save Changes</button>
<div className={css.liverelay}>
  <Live />
  <img className={css.facebook} src="https://i.pinimg.com/originals/58/f4/72/58f4723d8f23906bdcb058604075ad2a.png" style={{visibility: this.state.checked ? 'visible' : 'hidden' }} alt="" height="100vh" width="100vw" />

  <img className={css.google} src='./google_logo.png' style={{visibility: this.state.check ? 'visible' : 'hidden' }} alt="" height="100vh" width="100vw" />
  <img className={css.amazon} src='./amazon_logo.png' style={{visibility: this.state.amazon ? 'visible' : 'hidden' }} alt="" height="100vh" width="100vw" />
</div>
    </div>
  );
}

handleChange() {
  console.log(this.state.sec)
  console.log(this.state.checked)
  console.log(this.state.check)
  console.log(this.state.amazon)
}
}


export default Toogle;