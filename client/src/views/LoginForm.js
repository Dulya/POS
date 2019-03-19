import React from 'react';
import { connect } from "react-redux";
import { loginUser, validateUserDetails } from "../actions/userActions";

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password: "",
        };
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        this.props.afterValidateUser()
            .then(() => {
                this.props.history.push('/orders');
            });
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.loginUser(this.state.email, this.state.password).then((res) => {
            this.props.history.push("/orders");
        });
    }

    updateUsername(e) {
        e.preventDefault();
        this.setState({ email: e.target.value })
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
                        <form id="loginSubmissionForm" >
                            <div className="form-group">
                                <label>Email  </label>
                                <input id="userinput" name="username" className="input-group-text" type="text" value={this.state.email || ''} onChange={this.updateUsername} />
                            </div>

                            <div className="form-group">
                                <label>Password  </label>
                                <input id="password" name="password" className="input-group-text" type="password" value={this.state.password || ''} onChange={this.updatePassword} />

                            </div>
                            <input id="submit-button" type="submit" value="Sign In" className="btn btn-info" onClick={this.handleSubmit}/>

                        </form>
                        {this.props.user}
                    </div>
                </div>
            </div>
        );
    }
}

const mapActionsToProps = {
    loginUser: loginUser,
    afterValidateUser: validateUserDetails
}

const LoginFormContainer=connect(null, mapActionsToProps)(LoginForm);
export default LoginFormContainer;


