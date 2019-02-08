import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user_name:'',
            password:'',
        };
    }

    submitLogin(event){
        //event.preventDefault();

    }

    render(){
        return(
            <Form className="form-group" onSubmit="this.submitLogin">
                <div className="form-element">
                    <label>User Name : </label>
                    <input id="userinput" type="text">
                    </input>
                </div>

                <div className="form-element">
                    <label>Password : </label>
                    <input id="password" type="password">
                    </input>
                </div>

                <input type="submit" className="btn btn-info" value="Submit" />
            </Form>
        );
    }
    
}