import React from 'react';
import { connect } from 'react-redux';
import '../css/header.css';
import { validateUserDetails,logoutUser } from '../actions/userActions';
import { withRouter } from "react-router-dom";

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        this.props.onValidateUser()
            .catch(err => {
                this.props.history.push('/login');
            });
    }

    handleLogout() {
       
        this.props.onLogoutUser()
            .then(res => {
                this.props.history.push('/login');
            })   
    }

    render() {
        return (
            <div className="navbar">
                <p>POS</p>

                {this.props.user.user_name !== "" &&
                    <div className="user-panel">
                        <div className="user_icon_div" >
                            <img src="https://source.unsplash.com/collection/2454015/50x50" alt="user-logo" style={{ borderRadius: '50%' }}></img>
                        </div>
                        <div className="user_Label">
                            {this.props.user.user_name.charAt(0).toUpperCase() + this.props.user.user_name.slice(1, this.props.user.user_name.length)}
                        </div>
                        <div className="logoutPanel" >
                            <span style={{ color: 'white', fontSize: '20px' }}>
                                &#9776;
                                </span>
                            <div className="dropdown-content" onClick={this.handleLogout}>Log Out</div>
                        </div>



                    </div>}
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
    onLogoutUser:logoutUser
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Nav));
