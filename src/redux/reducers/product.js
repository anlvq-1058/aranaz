import { GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from "../constants";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: []
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        isLoading: true
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...action.payload],
        isLoading: false
      }
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        isError: true,
        error: [...action.payload]
      }
    default:
      return state;
  }
}
