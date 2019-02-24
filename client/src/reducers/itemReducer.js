import { RETRIVED_ITEMS } from '../actions/itemActions';

export default function itemReducer(state = [], { type, payload }) {
    switch (type) {
        case RETRIVED_ITEMS: return payload;
        default:return state;
    }
}