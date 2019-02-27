import { RETRIVED_ORDERS } from '../actions/orderActions';

export default function orderReducer(state = [], { type, payload }) {
    switch (type) {
        case RETRIVED_ORDERS: return payload;
        default:return state;
    }
}



