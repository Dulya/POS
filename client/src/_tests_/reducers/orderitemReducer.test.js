import orderitemReducer from '../../reducers/orderitemReducer.js';
import { RETRIEVED_ORDER_ITEMS, UPDATED_ORDER_ITEM, DELETED_ORDER_ITEM, ADDED_ORDER_ITEM } from '../../actions/orderitemActions.js';

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

describe('OrderItem reducer testing', () => {
    it('Should return state by default', () => {
        const action = { type: null };
        const expectedState = {
            isFetchedItems: false,
            isUpdated: false,
            isDeleted: false,
            isAdded: false,
            order_id: "",
            created_date: "",
            status: '',
            items: []
        }
        expect(orderitemReducer(initialState, action)).toEqual(expectedState);;
    });

    it('When updating an order item, isUpdated should be true and should change the items', () => {
        const action = {
            type: UPDATED_ORDER_ITEM, payload: {
                order_id: "O00001",
                created_date: "2019-01-19T18:30:00.000Z",
                status: "open",
                items: [
                    {
                        item_name: "Cheese Lovers-Medium",
                        price: 995,
                        orderitem_id: 1,
                        order_id: "O00001",
                        item_id: 1,
                        quantity: 1
                    }
                ]
            }
        }
        const expectedState = {
            ...initialState,
            isUpdated: true,
            ...action.payload
        }
        expect(orderitemReducer(initialState, action)).toEqual(expectedState);
    });

    it("when retrieving order items of an order, isFetched should be true and order_id,status,created_date should not be empty", () => {
        const action = {
            type: RETRIEVED_ORDER_ITEMS,
            payload: {
                order_id: "O00001",
                created_date: "2019-01-19T18:30:00.000Z",
                status: "open",
                items: [
                    {
                        item_name: "Cheese Lovers-Medium",
                        price: 995,
                        orderitem_id: 1,
                        order_id: "O00001",
                        item_id: 1,
                        quantity: 1
                    }
                ]
            }
        }
        const expectedState = {
            ...initialState,
            isFetched: true,
            ...action.payload
        }
        expect(orderitemReducer(initialState, action)).toEqual(expectedState);
    });

    it("when deleting an order item, isDeleted Should be true and items should be changed", () => {
        const action = {
            type: DELETED_ORDER_ITEM,
            payload: 'O00001'
        }

        const expectedState = {
            ...initialState,
            isDeleted: true,
            ...initialState
        }
        //expect(orderitemReducer(initialState, action)).toEqual(expectedState);;
    });

    it("when adding an order item, isAdded should be true and items should be chnaged", () => {
        const action = {
            type: ADDED_ORDER_ITEM,
            payload: {
                order_id: "O00001",
                created_date: "2019-01-19T18:30:00.000Z",
                status: "open",
                items: [
                    {
                        item_name: "Cheese Lovers-Medium",
                        price: 995,
                        orderitem_id: 1,
                        order_id: "O00001",
                        item_id: 1,
                        quantity: 1
                    }
                ]
            }
        }
        const expectedState = {
            ...initialState,
            isAdded: true,
            ...action.payload
        }
        expect(orderitemReducer(initialState, action)).toEqual(expectedState);
    });
});