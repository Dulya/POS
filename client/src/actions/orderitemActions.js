import axios from 'axios';
export const RETRIVED_ORDER_ITEMS = 'orders:retrievedOrderitems';
export const UPDATED_ORDER_ITEM = 'orders:updatedOrderitem';
export const DELETED_ORDER_ITEM = 'orders:updatedOrderitem';
export const ADDED_ORDER_ITEM = 'orders:updatedOrderitem';

export default function RetrieveOrderItems(order_id) {
    return (dispatch) => {
        const url = "/api/order/id/" + order_id;
        return axios.get(url)
            .then(order => {
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

export function UpdateOrderItem(updatedOrderItem) {
    return (dispatch) => {
        return axios.put("/api/orderitem", updatedOrderItem)
            .then(res => {
                dispatch({
                    type: UPDATED_ORDER_ITEM,
                    payload: res.data
                })
            })
    }
}

export function DeleteOrderItem(orderitem_id) {
    return (dispatch) => {
        return axios.delete("/api/orderitem/"+orderitem_id)
            .then(res => {
                dispatch({
                    type: DELETED_ORDER_ITEM,
                    payload: orderitem_id
                })
            })
    }
}

export function insertOrderItem(orderitem) {
    return (dispatch) => {
        return axios.post("/api/orderitem/"+orderitem)
            .then(orderitem => {
                dispatch({
                    type: ADDED_ORDER_ITEM,
                    payload: orderitem
                })
            })
    }
}

