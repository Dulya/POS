import { LOGGEDIN_USER } from '../actions/userActions';

export default function userReducer(state = '', { type, payload }) {
    switch (type) {
        case LOGGEDIN_USER: return payload;
        default:return state;
    }
}