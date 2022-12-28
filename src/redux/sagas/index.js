import {fork} from 'redux-saga/effects';
import productsSaga from './product';

export default function* mySaga() {
  yield fork(productsSaga);
}
