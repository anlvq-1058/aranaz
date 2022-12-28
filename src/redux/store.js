import { createStore, applyMiddleware } from 'redux';
import mySaga from './reducers';
import createSagaMiddleware from 'redux-saga';
import productSaga from './sagas';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(mySaga, applyMiddleware(...[sagaMiddleware, logger]));
sagaMiddleware.run(productSaga);

export default store;
