import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer, initialState } from '../reducers'

const store = createStore(rootReducer, initialState, applyMiddleware(logger))

export default store