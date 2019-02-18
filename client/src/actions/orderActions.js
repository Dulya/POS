import axios from 'axios';
export const RETRIVED_ORDERS = 'orders:retrievedOrders';

export default function RetrieveOrders(user_name) {
    return (dispatch) => {
        const url = '/api/order/user/' + user_name;
        axios.get(url)
            .then(orders => {
                dispatch({
                    type: RETRIVED_ORDERS,
                    payload: orders
                });
                return orders;
            })
    }
} 