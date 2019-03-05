import React from 'react';
import { connect } from 'react-redux';
import '../css/header.css';
import { validateUserDetails } from '../actions/userActions';
import { withRouter } from "react-router-dom";

var dateFormat = require('dateformat');

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onValidateUser()
            .catch(err => {
                this.props.history.push('/login');
            });
    }


    render() {
        return (
            <div className="navbar">
                <p>POS</p>

                {this.props.user.user_name !== "" &&
                    <div className="user-panel">
                        <div className="user_icon_div" >
                            <i className="glyphicon glyphicon-user" id="user_icon"></i>
                        </div>
                        <div className="user_Label">
                            {this.props.user.user_name}
                        </div></div>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapActionsToProps = {
    onValidateUser: validateUserDetails,
}



export default withRouter(connect(mapStateToProps, mapActionsToProps)(Nav));
