import React from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';




class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formFields: {
                username: "",
                password: "",
            }
        };
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

        handleSubmit(e){
            e.preventDefault();
            let data = {
                username: this.state.formFields["username"],
                password: this.state.formFields["password"]
            }
            //console.log(data.username);
            //console.log(data.password);
            axios.post('/test', data)
                .then(function (response) {
                    console.log(response);

                })
                .catch(function (error) {
                    console.log(error);
                });
        }



        /*componentWillMount() {
            this.callAPI();
        }*/

        updateUsername(e){
            e.preventDefault();
            this.setState({ formFields: { username: e.target.value } })
        }

        updatePassword(e){
            e.preventDefault();
            this.setState({ formFields: { password: e.target.value } })
        }

        render(){
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
                                    <input id="userinput" name="username" className="input-group-text" type="text" value={this.state.formFields.username || ''} onChange={this.updateUsername} />
                                </div>

                                <div className="form-group">
                                    <label>Password  </label>
                                    <input id="password" name="password" className="input-group-text" type="password" value={this.state.formFields.password || ''} onChange={this.updatePassword} />

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
