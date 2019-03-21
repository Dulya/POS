import { RETRIVED_ITEMS } from "../actions/itemActions";

const initialState = {
  isFetchedItems: false,
  data: []
};

export default function itemReducer(state = initialState, { type, payload }) {
  switch (type) {
    case RETRIVED_ITEMS:
      return { ...state, isFetchedItems: true, data: payload };
    default:
      return state;
  }
}
