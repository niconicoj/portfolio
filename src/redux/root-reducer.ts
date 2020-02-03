import { combineReducers } from 'redux';

import contactReducer from './contact/reducers';

const rootReducer = () => combineReducers({
  contact: contactReducer
});

export default rootReducer;