import React, { Component } from 'react';
import css from '../../style.css';
import Live from '../../public/codealter';
import Google from '../../public/google';
// import amz from '/logos/amazon_logo.png';
// import amz from '.././logos/amazon_logo.png';
// import google from '.././logos/google_logo.png';
// import live from '../image/live.png'
import Switch from "react-ios-switch";

export default class Toogle extends Component {
 
  constructor(props){
    super(props);

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
    <div className={css.App}>
      <div className={css.Fb}>
        <h5>FACEBOOK</h5>
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
  <Google />
  {/* <img className={css.google} src={Google} style={{visibility: this.state.check ? 'visible' : 'hidden' }} alt="" height="100vh" width="100vw" /> */}
  {/* <img className="amazon" src={amz} style={{visibility: this.state.amazon ? 'visible' : 'hidden' }} alt="" height="100vh" width="100vw" /> */}
</div>
    </div>
  );
}

handleChange() {
  
  console.log(this.state.checked)
  console.log(this.state.check)
  console.log(this.state.amazon)
}
}


