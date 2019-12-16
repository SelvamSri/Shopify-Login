// import React from 'react';
// import '../App.css';

// function Email() {
//   return (
//     <div className="App">
//       <header className="App-header">
//      <form>
//         <h6 className="ema"> Email:</h6>
//     <input
//     className="email"            
//     id="email"
//     type="email"
//     />
//     <br></br>
//     <h6 className="mes">Message:</h6> <input
//     className="message"            
//     id="message"
//     type="mesage"
//     /><br></br>
//     <button className="submit" type="submit" value="submit" >submit</button>
//     </form>
//       </header>
//     </div>
//   );
// }

// export default Email;


import React from 'react';
import css from '../../style.css'

export default class extends React.Component {
  constructor(props) {
	super(props);
  this.state = { feedback: '', name: '', email: 'selvam@nuatransmedia.com' };
  this.handleChangee = this.handleChangee.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className={css.App1}>
    	<h6 className={css.ema}>Name:</h6>
    	<div>
      	<textarea
          id="test-mailing"
          className={css.testmailing}
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Write some Message Here"
        	required
        	value={this.state.feedback}
        	style={{width: '85%', height: '150px'}}
      	/>
        <h6 className={css.mes}>Message:</h6>
        	<textarea
          id="test"
          className={css.test}
        	name="test"
        	onChange={this.handleChangee}
        	placeholder="Name"
        	required
        	value={this.state.name}
          style={{width: '85%', height: '25px'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className={css.btn_btnsubmit} onClick={this.handleSubmit} />
  	</form>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }
  handleChangee(event) {
    this.setState({name: event.target.value})
  }

  handleSubmit (event) {
    const templateId = 'template_XEYcWzvY';
  
    this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    }
  
    sendFeedback (templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
        
       alert("Message send successfully")
      })
      // Handle errors here however you like, or use a React error boundary
      alert(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
  }