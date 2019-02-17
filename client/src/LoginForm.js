import React from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            user_name: this.state.username,
            password: this.state.password,
        }
        axios.post('/user/login', data)
            .then((user) =>{
                this.props.history.push("/Orders");
            })
            .catch(function (error) {
                console.log("Error Log In. Please Try Again.", error);
            });
    }

    updateUsername(e) {
        e.preventDefault();
        this.setState({ username: e.target.value })
    }

    updatePassword(e) {
        e.preventDefault();
        this.setState({ password: e.target.value })
    }

    render() {
        return (

            <div className="outer-wrapper">
                <div className="outer-box">
                    <div className="header">
                        Sign In
                    </div>
                    <div className="inner-box">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>User Name  </label>
                                <input id="userinput" name="username" className="input-group-text" type="text" value={this.state.username || ''} onChange={this.updateUsername} />
                            </div>

                            <div className="form-group">
                                <label>Password  </label>
                                <input id="password" name="password" className="input-group-text" type="password" value={this.state.password || ''} onChange={this.updatePassword} />

                            </div>
                            <input id="submit-button" type="submit" value="Sign In" className="btn btn-info" />

                        </form>
                    </div>
                </div>
            </div>

        );
    }

}

export default LoginForm;


