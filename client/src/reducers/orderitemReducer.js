import { RETRIEVED_ORDER_ITEMS } from '../actions/orderitemActions';
import { UPDATED_ORDER_ITEM } from '../actions/orderitemActions';
import { DELETED_ORDER_ITEM } from '../actions/orderitemActions';
import { ADDED_ORDER_ITEM } from '../actions/orderitemActions';

const initialState = {
    order_id: "",
    created_date: "",
    status: '',
    items: []
}

export default function orderitemReducer(state = initialState, { type, payload }) {
    switch (type) {
        case RETRIEVED_ORDER_ITEMS: return {...state,...payload};
        case UPDATED_ORDER_ITEM: return state;
        case DELETED_ORDER_ITEM:
            const newDeleteState = Object.assign({}, state);
            newDeleteState.items = newDeleteState.items.filter(item => item.orderitem_id !== payload);
            return newDeleteState;
        case ADDED_ORDER_ITEM:
            const newAddState = Object.assign({}, state);
            newAddState.items.push(payload.items);
            return newAddState;
        default: return state;
    }
}