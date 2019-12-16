import React from 'react'
import SocialLogin from 'react-social-login'
import '../App.css'
const color = {
    but: {
   'background-color': 'transparent',
   'border-color': 'transparent',
 }}
class SocialButton extends React.Component {
 
    render() {
        return (
            <button style={color.but} onClick={this.props.triggerLogin} {...this.props}>
              { this.props.children }
            </button>
        );
    }
}
 
export default SocialLogin(SocialButton);