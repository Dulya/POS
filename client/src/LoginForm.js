import { connect } from 'react-redux';
import React from 'react';
import logInUser from './actions/userActions';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            password: "",
        };
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onLoginUser(this.state)
            .then((user) => {
                this.props.history.push("/orders");
            })
            .catch(err => {
                console.log("Error Log In. Please Try Again.", err);
            });
    }

    updateUsername(e) {
        e.preventDefault();
        this.setState({ user_name: e.target.value })
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
                                <input id="userinput" name="username" className="input-group-text" type="text" value={this.state.user_name || ''} onChange={this.updateUsername} />
                            </div>

                            <div className="form-group">
                                <label>Password  </label>
                                <input id="password" name="password" className="input-group-text" type="password" value={this.state.password || ''} onChange={this.updatePassword} />

                            </div>
                            <input id="submit-button" type="submit" value="Sign In" className="btn btn-info" />

                        </form>
                        {this.props.user}
                    </div>
                </div>
            </div>

        );
    }

}


const mapActionsToProps = {
    onLoginUser: logInUser
}

export default connect(null, mapActionsToProps)(LoginForm);


