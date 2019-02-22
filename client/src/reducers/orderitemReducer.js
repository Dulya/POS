import { RETRIVED_ORDER_ITEMS } from '../actions/orderitemActions';

export default function orderitemReducer(state = [], { type, payload }) {
    switch (type) {
        case RETRIVED_ORDER_ITEMS: return payload;
        default:return state;
    }
}