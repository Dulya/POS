import React from 'react';
//import ReactDOM from 'react-dom';



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
            <form  onSubmit="this.submitLogin">
                <div className="form-group">
                    <label>User Name : </label>
                    <input id="userinput" className="input-group-text" type="text"/>   
                </div>

                <div className="form-group">
                    <label>Password : </label>
                    <input id="password" className="input-group-text" type="password">
                    </input>
                </div>

                <input type="submit" value="Submit" className="btn btn-info"/>
            </form>
        );
    }
    
}
export default LoginForm;
