import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger({
  collapsed: true,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
