import orderitemReducer from '../../reducers/orderitemReducer.js';
import { RETRIEVED_ORDER_ITEMS, UPDATED_ORDER_ITEM, DELETED_ORDER_ITEM, ADDED_ORDER_ITEM } from '../../actions/orderitemActions.js';

const initialState = {
    order_id: "",
    created_date: "",
    status: '',
    items: []
}

describe('OrderItem reducer testing', () => {
    it('Should return state by default', () => {
        const action = { type: null };
        const expectedState = {
            order_id: "",
            created_date: "",
            status: '',
            items: []
        }
        expect(orderitemReducer(initialState,action)).toEqual(expectedState);;
    });
});