import { VALIDATE_USER } from '../actions/userActions';
import { LOGOUT_USER } from '../actions/userActions';


const initialState = {
    user_name: "",
    user_type: ""
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case VALIDATE_USER: return action.payload;
        case LOGOUT_USER:return action.payload;
        default: return state;
    }
}


