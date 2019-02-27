import axios from 'axios';
export const RETRIVED_ORDER_ITEMS = 'orders:retrievedOrderitems';
export const UPDATED_ORDER_ITEM = 'orders:updatedOrderitem';
export const DELETED_ORDER_ITEM = 'orders:deletedOrderitem';
export const ADDED_ORDER_ITEM = 'orders:addedOrderitem';

export default function RetrieveOrderItems(order_id) {
    return (dispatch) => {
        const url = "/api/order/id/" + order_id;
        return axios.get(url)
            .then(order => {
                dispatch({
                    type: RETRIVED_ORDER_ITEMS,
                    payload: order.data
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

export function AddOrderItem(order_id,item_id,quantity) {
    const orderitem={
        order_id:order_id,
        item_id:item_id,
        quantity:quantity
    }
    return (dispatch) => {
        return axios.post("/api/orderitem",orderitem)
            .then(res => {
                dispatch(RetrieveOrderItems(order_id));
                /*dispatch({
                    type: ADDED_ORDER_ITEM,
                    payload: orderitem
                })*/
            })
            .catch(err=>{
                console.log("Error",err);
            });

            
    }
}

