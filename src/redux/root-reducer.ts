// import { combineReducers } from 'redux';

import contactReducer from './contact/reducers';

// const rootReducer = () => combineReducers({
//   contact: contactReducer
// });

const rootReducer = contactReducer

export default rootReducer;