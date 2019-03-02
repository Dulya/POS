import React from 'react';
import { connect } from 'react-redux';
import '../css/header.css';

var dateFormat = require('dateformat');

class Nav extends React.Component {
    constructor(props) {
        super(props);
    
        
    }


    render() {
        
        return (
            

            <div className="navbar">
                <p>POS</p>
                
                {this.props.user.user_name!=="" && 
                <div>
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


export default connect(mapStateToProps, null)(Nav);
