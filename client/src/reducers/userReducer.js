import { VALIDATE_USER } from '../actions/userActions';

const initialState={
    user_name:"",
    user_type:""
}

export default function userReducer(state = initialState, action) {
    switch (action) {
        case VALIDATE_USER: return action.payload;
        default:return state;
    }
}