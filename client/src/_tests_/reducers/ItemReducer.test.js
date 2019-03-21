import itemReducer from "../../reducers/itemReducer.js";
import { RETRIVED_ITEMS } from "../../actions/itemActions.js";

const initialState = {
  isFetchedItems: false,
  data: []
};

describe("Item reducer testing", () => {
  it("Should return state by default", () => {
    const action = { type: null };
    const expectedState = {
      isFetchedItems: false,
      data: []
    };
    expect(itemReducer(initialState, action)).toEqual(expectedState);
  });

  it("Fetched item case testing", () => {
    const action = {
      type: RETRIVED_ITEMS,
      payload: [
        {
          item_id: "I001",
          item_name: "dummy",
          price: "dummy",
          category: "dummy"
        }
      ]
    };
    const expectedState = {
      isFetchedItems: true,
      data: [
        {
          item_id: "I001",
          item_name: "dummy",
          price: "dummy",
          category: "dummy"
        }
      ]
    };
    expect(itemReducer(initialState, action)).toEqual(expectedState);
  });
});
