import orderReducer from '../../reducers/orderReducer.js';
import { RETRIVED_ORDERS_BY_USER } from '../../actions/orderActions.js';
import itemReducer from '../../reducers/itemReducer.js';

const initialState = {
    isFetched: false,
    data: []
};

describe("Order reducer testing", () => {
    it("Should return state by default", () => {
        const action = { type: null };
        const expectedState = {
            isFetched: false,
            data: []
        };
        expect(orderReducer(initialState, action)).toEqual(expectedState);
    });

    it("when fetching orders, isFetched should be true", () => {
        const action = {
            type: RETRIVED_ORDERS_BY_USER,
            payload: [{
                order_id: "O00001",
                user_name: "john",
                status: "open",
                created_date: "2019-01-19T18:30:00.000Z",
                total_amount: 8005
            }]
        }
        const expectedState = {
            ...initialState,
            isFetched: true,
            data: action.payload
        }
        expect(orderReducer(initialState, action)).toEqual(expectedState);
    });
});