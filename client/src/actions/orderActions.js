import axios from 'axios';
export const RETRIVED_ORDERS = 'orders:retrievedOrders';
export const FILTERED_ORDERS = 'orders:filteredOrders';

export default function RetrieveOrders() {
    return (dispatch) => {
        const url = '/api/order/user';
        return axios.get(url)
            .then(orders => {
                dispatch({
                    type: RETRIVED_ORDERS,
                    payload: orders.data
                });

                return orders;
            })
    }
}

export function FilterOrders(status) {
    return (dispatch) => {
        return dispatch({
            type: FILTERED_ORDERS,
            payload: status
        });               
}
}



