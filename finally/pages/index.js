import React,{Component} from 'react';
import './App.css';
import Demo from './Amazonlogin';
// import Demo from './button.liquid'
// import {Provider, Modal} from '@shopify/app-bridge-react';
import Modal from 'react-awesome-modal';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                {/* <h1>Hello World !!!!</h1> */}
                <div>
                <input type="button" className="button" value="Login" onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="480"
                    height="550"
                    effect="fadeInDown"
                    onClickAway={() => this.closeModal()}>
                    <div className="App">
                    <div className="App1">
      <header className="App-header1">
   
        
      <Demo />
      </header>
    </div>
                       
                    </div>
                    
                </Modal>
                </div>
            </section>
        );
    }
}
export default App;
