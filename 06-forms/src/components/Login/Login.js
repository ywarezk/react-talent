import React, {Component} from 'react';

export default class Login extends Component {

    state = {
        email: ''
    }

    handleEmailChange = (e) => {
        const newValue = e.target.value;
        this.setState({
            email: newValue
        });
    }

    loginSubmit = (event) => {
        // grab email and password that user entered

        // controled input
        // all the changes in the input goes through react
        const email = this.state.email;
        console.log(email);

        // uncontroled
        const password = this.passwordInput.value;
        console.log(password);


        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.loginSubmit}>
                <div className="form-group">
                    <label forhtml="email" >Email:</label>
                    <input type="email" value={this.state.email} name="email" className="form-control" id="email" onChange={this.handleEmailChange} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" className="form-control" ref={(inputDomElement) => this.passwordInput = inputDomElement}  />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }

}