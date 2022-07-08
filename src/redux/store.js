import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { todos } from './app.sagas';

const sagaMiddleware = createSagaMiddleWare();
const middlewares = [logger,sagaMiddleware];
export const store =  createStore(rootReducer,applyMiddleware(...middlewares));

sagaMiddleware.run(todos);
export default store;