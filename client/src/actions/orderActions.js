import axios from "axios";
export const RETRIVED_ORDERS_BY_USER = "orders:retrievedOrdersByUser";

export default function RetrieveOrdersByUserName() {
  return dispatch => {
    const url = "/api/order/user";
    return axios.get(url).then(orders => {
      dispatch({
        type: RETRIVED_ORDERS_BY_USER,
        payload: orders.data
      });
      return orders;
    });
  };
}
