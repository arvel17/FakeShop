import { ActionTypes } from "../constants/action-types";

//membuat reducers untuk mengatur state pada aplikasi
const initialState = {
  product: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, product: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, product: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
