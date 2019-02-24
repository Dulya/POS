import axios from 'axios';
export const RETRIVED_ORDER_ITEMS = 'orders:retrievedOrderitems';

export default function RetrieveOrderItems(order_id) {
    return (dispatch) => {
        const url = "/api/order/id/" + order_id;    
        return axios.get(url)
            .then(order => {
                console.log("here are items",order.data.items);
                dispatch({
                    type: RETRIVED_ORDER_ITEMS,
                    payload: {
                        order_id: order.data.order_id,
                        created_date: order.data.created_date,
                        status: order.data.status,
                        items: order.data.items
                    }
                })
                return order;
            })
    }
}

