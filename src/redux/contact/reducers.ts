import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';
import { createReducer } from 'typesafe-actions';

import { Contact } from './models';
import { ActionTypes } from './constants';

export type ContactState = Readonly<{
  contact: Contact;
}>;

const initialState: ContactState = {
  contact: {
    name: "",
    mail: "",
    message: "",
    errors: {
      name: {
        status: false
      },
      mail: {
        status: false
      },
      message: {
        status: false
      },
    }
  },
}

const contact = createReducer(initialState.contact)
  .handleType(ActionTypes.UPDATE, (state, action) => {
    {
      ...state,
      [action.payload.id]: action.payload.value,
      errors: {
        ...state.errors,
        [action.payload.id]: {
          status: false
        }
      }
    }
  });

export default combineReducers({
  contact
});