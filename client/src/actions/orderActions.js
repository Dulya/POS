import axios from 'axios';
export const RETRIVED_ORDERS = 'orders:retrievedOrders';

export default function RetrieveOrders() {
    return (dispatch) => {
        const url = '/api/order/user';
        return axios.get(url)
            .then(orders => {
                console.log(orders.data);
                dispatch({
                    type: RETRIVED_ORDERS,
                    payload: orders.data
                });
                
                return orders;
            })
    }
} 