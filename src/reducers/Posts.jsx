import { CREATE, FETCH_ALL, UPDATE, DELETE } from "../constants/actionTypes";
const reducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];

    default:
      return state;
  }
};
export default reducer;
