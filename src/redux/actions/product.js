import { GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from "../constants";

export function getProducts(payload) {
  return {
    type: GET_PRODUCT,
    payload
  };
};

export function getProductSuccess(payload) {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload
  };
};
