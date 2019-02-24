import { RETRIVED_ORDER_ITEMS } from '../actions/orderitemActions';

const initialState = {
    order_id: "",
    crated_date: "",
    status: '',
    items: []
  }

export default function orderitemReducer(state = initialState, { type, payload }) {
    switch (type) {
        case RETRIVED_ORDER_ITEMS: return payload;
        default:return state;
    }
}