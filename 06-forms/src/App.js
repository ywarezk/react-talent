import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginForm from './components/Login/Login';

class App extends Component {
  
  parentLogin = () => {
    this.instanceOfLoginForm.loginSubmit();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-center text-left mt-5">
            <div className="col-4">

              <LoginForm ref={(componentLoginForm) => this.instanceOfLoginForm = componentLoginForm} />

              <button onClick={this.parentLogin}>Activate Child Login</button>
            </div>
          </div> 
        </div>
        
      </div>
    );
  }
}

export default App;
