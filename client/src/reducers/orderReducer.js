import { RETRIVED_ORDERS_BY_USER } from '../actions/orderActions';

const initialState = {
    isFetched: true,
    data:[]
};

export default function orderReducer(state = initialState, { type, payload }) {
    switch (type) {
        case RETRIVED_ORDERS_BY_USER: return {...initialState,isFetched:true,data:payload};
        default: return state;
    }
}



