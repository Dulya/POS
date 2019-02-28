import { RETRIVED_ORDERS_BY_USER } from '../actions/orderActions';

export default function orderReducer(state = [], { type, payload }) {
    switch (type) {
        case RETRIVED_ORDERS_BY_USER: return payload;
        default:return state;
    }
}



