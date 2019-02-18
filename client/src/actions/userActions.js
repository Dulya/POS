import axios from 'axios';
export const LOGGEDIN_USER = 'users:loggedInUser';

export default function logInUser(loggedUser) {
    return (dispatch) => {
        return axios.post('/user/login', loggedUser)
            .then(user => {
                dispatch({
                    type: LOGGEDIN_USER,
                    payload: {user_name:'john',password:'123'}
                });
                return user;
            })
    }
} 