import itemReducer from '../../reducers/itemReducer.js';
import { RETRIVED_ITEMS } from '../../actions/itemActions.js';

const initialState = [];

describe('Item reducer testing', () => {
    it('Should return state by default', () => {
        const action = { type: null };
        const expectedState = [];
        expect(itemReducer(initialState, action)).toEqual(expectedState);
    });

    it('Fetched item case testing', () => {
        const action = { type: RETRIVED_ITEMS, payload: [{ item_id: 'I001', item_name: 'dummy', price: "dummy", category: "dummy" }] };
        const expectedState = action.payload;
        expect(itemReducer(initialState, action)).toEqual(expectedState);
    });
});