import userReducer from "../../reducers/userReducer.js";
import { VALIDATE_USER } from "../../actions/userActions.js";

const initialState = {
  email: "",
  user_name: "",
  user_type: ""
};

describe("User reducer testing", () => {
  it("Should return state by default", () => {
    const action = { type: null };
    const expectedState = {
      email: "",
      user_name: "",
      user_type: ""
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it("validate the logged in user and should return validated user_name and user_type", () => {
    const action = {
      type: VALIDATE_USER,
      payload: {
        email: "dummy@gmail.com",
        user_name: "dummy",
        user_type: "dummy"
      }
    };
    const expectedState = {
      ...initialState,
      ...action.payload
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });
});
