import axios from 'axios';
export const RETRIVED_ORDERS = 'orders:retrievedOrders';

export default function RetrieveOrders(user_name) {
    return (dispatch) => {
        const url = '/api/order/user/' + user_name;
        return axios.get(url)
            .then(orders => {
                dispatch({
                    type: RETRIVED_ORDERS,
                    //payload: orders
                    payload: {order_id:'O00001',user_name:'john',status:'open',created_date:'2019-01-20'}
                });
                
                return orders;
            })
    }
} 