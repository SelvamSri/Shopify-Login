import React, { Component } from 'react'
// import insta from './logos/amazon_logo.png';
import SocialButton from './Amazon/Social'
// import google from './logos/google_logo.png'

import UserCard from './Amazon/userCard'
import axios from 'axios';
import Amazon from '../public/amazon';
import Google from '../public/google';


const image = {





logo: {
  position: 'absolute',
  top: '15px',
  left: '30px',
  cursor: 'pointer',
},
logo1: {
  position: 'absolute',
  top: '15px',
  left: '155px', 
  cursor: 'pointer',
},

logo2: {
  position: 'absolute',
  top: '15px',
  left: '285px', 
  cursor: 'pointer',
},
logo3: {
  position: 'absolute',
  top: '15px',
  left: '415px',
  cursor: 'pointer',
},
logo4: {
  position: 'absolute',
  top: '15px',
  left: '545px',
  cursor: 'pointer',
},
loginwith: {
  position: 'absolute',
  top: '150px',
  left: '150px',
}
}
export default class Demo extends Component {

  constructor (props) {
    super(props)

    this.state = {
      logged: false,
      user: {},
      shopURL: 'sociallog.myshopify.com',
      currentProvider: '',
      postDat: {}
    }
    this.nodes = {}

    this.onLoginSuccess = this.onLoginSuccess.bind(this)
    this.onLoginFailure = this.onLoginFailure.bind(this)
    this.onLogoutSuccess = this.onLogoutSuccess.bind(this)
    this.onLogoutFailure = this.onLogoutFailure.bind(this)
    this.logout = this.logout.bind(this)
  }
   

   
  setNodeRef (provider, node) {
    if (node) {
      this.nodes[ provider ] = node
    }
  }

  onLoginSuccess (user) {
    const postData =  {
      "customer": {
        "first_name": user._profile.firstName,
        "last_name": user._profile.lastName,
        "email": user._profile.email,
        "phone": '',
        "addresses": []
      }
    }
    // {
    //   // "customer": {
     
    //     "employee_name": user._profile.firstName,
    //     "last_name": user._profile.lastName,
    //     "email": user._profile.email,
    //   // }
    // };
    const credentials = '1018379a7800263c6c14db4b045539df';
    var basicAuth = 'Basic ' + credentials;




    // new part  doCORSRequest...




    // var cors_api_url = 'https://sociallog.myshopify.com/admin/api/2019-10/customers.json';
    // function doCORSRequest(options, printResult) {
    //   var x = new XMLHttpRequest();
    //   x.open(options.method, cors_api_url );
    //   x.onload = x.onerror = function() {
    //     printResult(
    //       options.method + '\n' +
    //       x.status + ' ' + x.statusText + '\n\n' +
    //       (x.responseText || '')
    //     );
    //   };
    //   if (/^POST/i.test(options.method)) {
    //     x.setRequestHeader('Content-Type', 'application/json','Authorization', 'Bearer' +credentials);
    //   }
    //   x.send(options.data);
    // }
    // doCORSRequest({
    //   method: 'POST',
    //   url: 'https://sociallog.myshopify.com/admin/api/2019-10/customers.json',
    //   data: postData,
    // }, function printResult(result) {
    //   console.log(result)
    // });




    //new end
    console.log(user)
    
    console.log(postData)




    // ajax post









    // async function createUser() {
    //   const response = await fetch('https://sociallog.myshopify.com/admin/api/2019-10/customers.json', {
    //     method: 'POST',
    //     headers:{
    //     //  'X-Auth-Token': '6e57643ea3b05d34e1ecb6d86501229d'
    //     },
    //     mode: 'cors',
    //     Accesstoken: '6e57643ea3b05d34e1ecb6d86501229d',
    //     crossDomain: true,
    //     body: postData,
    //     // beforeSend : function(xhr) {
    //     //   xhr.setRequestHeader("access_token", "6e57643ea3b05d34e1ecb6d86501229d");
    //     //   },
    //     }).then(response=> {
    //     console.log('Ok', response)
    //     })
    //   .catch(error => {
    //     console.log('Not Ok', error)
    //   });
    //   console.log(response)
    // }
    
    // createUser()


    


    fetch('http://localhost:8888/products', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          
      },
      body: JSON.stringify({
        "customer": {
          "first_name": user._profile.firstName,
          "last_name": user._profile.lastName,
          "email": user._profile.email,
          "phone": '',
          "addresses": []
        }
      })
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })







    // axios post







    //   axios.post('https://sociallog.myshopify.com/admin/api/2019-10/cutomers.json',
    //   postData, 
    //   {
    //     // 'Access-Control-Allow-Origin': 'https://sociallog.myshopify.com/admin/api/2019-10/customers.json',
    //     // headers:{
    //     //   'X-Shopify-Access-Tokken': 'd896e01ac7de25f44ee0ad764aac87d5',
    //     //   'Content-Type': 'application/json',
    //     // },
    //     },
    //     )
    //   .then(response => {
    //     console.log('Ok',response)
    //   })
    //   .catch(error => {
    //     console.log('not Ok',error)
    //   })
    // this.setState({
    //   logged: true,
       
    //   currentProvider: user._provider,
    //   user
    // })
  }

  onLoginFailure (err) {
    console.error(err)

    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    })
  }

  onLogoutSuccess () {
    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    })
  }

  onLogoutFailure (err) {
    console.error(err)
  }

  logout () {
    const { logged, currentProvider } = this.state

    if (logged && currentProvider) {
      this.nodes[currentProvider].props.triggerLogout()
    }
  }

  render () {
    let children

    if (this.state.logged) {
      children = <UserCard user={this.state.user} logout={this.logout} />
    } else {
      
      children = [
        <SocialButton
          provider='facebook'
          appId="743738122718119"
          onLoginSuccess={this.onLoginSuccess}
          onLoginFailure={this.onLoginFailure}
          onLogoutSuccess={this.onLogoutSuccess}
          getInstance={this.setNodeRef.bind(this, 'facebook')}
          key={'facebook'}
        >
          <img style={image.logo} src="https://i.pinimg.com/originals/58/f4/72/58f4723d8f23906bdcb058604075ad2a.png" title="facebook login" alt="facebook" height="150px" width="150px" />
        </SocialButton>,
        <SocialButton
          provider='google'
          appId='555371152154-faiudnv4deckojvcuqsh2kdpf5obe12u.apps.googleusercontent.com'
          onLoginSuccess={this.onLoginSuccess}
          onLoginFailure={this.onLoginFailure}
          onLogoutSuccess={this.onLogoutSuccess}
          onLogoutFailure={this.onLogoutFailure}
          getInstance={this.setNodeRef.bind(this, 'google')}
          key={'google'}
        >
          <Google />
        </SocialButton>,
         <SocialButton
         provider='amazon'
         appId='amzn1.application-oa2-client.0623170e36984f82a8b4ed9b1230a1cb'
         onLoginSuccess={this.onLoginSuccess}
         onLoginFailure={this.onLoginFailure}
         onLogoutSuccess={this.onLogoutSuccess}
         getInstance={this.setNodeRef.bind(this, 'amazon')}
         key={'amazon'}
       >
         <Amazon />
       </SocialButton>,
          <h5 style={image.loginwith}>or login with</h5>
      
      ]

    
    }

    return children
  }
}



