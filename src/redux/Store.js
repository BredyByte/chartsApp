import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './rootReducer';
import rootSaga from './saga/index.saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();


export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);
