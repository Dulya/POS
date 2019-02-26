import { RETRIVED_ORDERS } from '../actions/orderActions';
import { FILTERED_ORDERS } from '../actions/orderActions';

export default function orderReducer(state = [], { type, payload }) {
    switch (type) {
        case RETRIVED_ORDERS: return payload;
        case FILTERED_ORDERS: 
        //const newOrderState = Object.assign([], state);
        //console.log(newOrderState);
        return state.filter(order => order.status === payload);
        //return newOrderState;
        default:return state;
    }
}



