import { RETRIEVED_ORDER_ITEMS } from '../actions/orderitemActions';
import { UPDATED_ORDER_ITEM } from '../actions/orderitemActions';
import { DELETED_ORDER_ITEM } from '../actions/orderitemActions';
import { ADDED_ORDER_ITEM } from '../actions/orderitemActions';

const initialState = {
    isFetchedItems: false,
    isUpdated: false,
    isDeleted: false,
    isAdded: false,
    order_id: "",
    created_date: "",
    status: '',
    items: []
}

export default function orderitemReducer(state = initialState, { type, payload }) {
    switch (type) {
        case RETRIEVED_ORDER_ITEMS: return { ...state, isFetched: true, ...payload };
        case UPDATED_ORDER_ITEM: return { ...state, isUpdated: true, ...payload};
        case DELETED_ORDER_ITEM:
            const newDeleteState = Object.assign({}, state);
            newDeleteState.items = newDeleteState.items.filter(item => item.orderitem_id !== payload);
            return { ...newDeleteState, isDeleted: true };
        case ADDED_ORDER_ITEM:
            const newAddState = Object.assign({}, state);
            newAddState.items.push(payload.items);
            return {...newAddState,isAdded:true,...payload};
        default: return state;
    }
}