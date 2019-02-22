import axios from 'axios';
export const RETRIVED_ORDER_ITEMS = 'orders:retrievedOrderitems';

export default function RetrieveOrderItems(order_id) {
    return (dispatch) => {
        const url = "/api/orderitem/" + order_id;
        return axios.get(url)
            .then(orderitems => {
                dispatch({
                    type: RETRIVED_ORDER_ITEMS,
                    payload: orderitems.data
                });
                return orderitems;   
            })
    }
}