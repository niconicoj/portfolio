import logger from 'redux-logger'
import { RootAction, RootState } from 'MyTypes';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './root-reducer';
import rootEpic from './root-epic';
// import services from '../services';

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState
>();

// configure middlewares
const middlewares = [epicMiddleware, logger];
// compose enhancers
const enhancer = applyMiddleware(...middlewares);

// rehydrate state on app start
const initialState = {};

// create store
const store = createStore(rootReducer(), initialState, enhancer);

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;