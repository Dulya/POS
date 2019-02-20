import { VALIDATE_USER } from '../actions/userActions';

export default function userReducer(state = '', action) {
    switch (action) {
        case VALIDATE_USER: return action.payload;
        default:return state;
    }
}