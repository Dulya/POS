import axios from 'axios';
export const VALIDATE_USER = 'users:validateUser';


export function validateUserDetails() {
    return (dispatch) => {  
        return axios.get('/api/session')
            .then(user => {
                console.log("this is user :",user.data);
                dispatch({
                    type: VALIDATE_USER,
                    payload: user.data
                });
                return user;
            })
    }
} 