import { RETRIVED_ITEMS } from '../actions/itemActions';

const initialState=[];

export default function itemReducer(state = initialState, { type, payload }) {
    switch (type) {
        case RETRIVED_ITEMS: return payload;
        default:return state;
    }
}