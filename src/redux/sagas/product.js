import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getProductSuccess } from '../actions';
import { GET_PRODUCT_FAIL, GET_PRODUCT } from '../constants';

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function* getProductSaga(action) {
  try {
    const response = yield axios.get(`${API_URL}/products?${action.payload}`);
    yield put(getProductSuccess(response.data));
  } catch (error) {
    console.log("error saga" + error);
    yield put({type: GET_PRODUCT_FAIL, payload: error});
  }
}

function* productsSaga() {
  yield takeEvery(GET_PRODUCT, getProductSaga)
}

export default productsSaga;
