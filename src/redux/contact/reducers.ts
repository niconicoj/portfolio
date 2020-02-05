import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { Contact } from './models';
import { ActionTypes } from './constants';

export type ContactAction = ActionType<typeof actions>;

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
      fetching: {
        status: false
      }
    },
    fetching: false
  },
}

export default combineReducers<ContactState, ContactAction>({
  contact: (state = initialState.contact, action) => {
    switch (action.type) {
      case ActionTypes.UPDATE:
        return {
          ...state,
          [action.payload.id]: action.payload.value,
          errors: {
            ...state.errors,
            [action.payload.id]: {
              status: false
            }
          }
        }
      case ActionTypes.VALIDATE:
        return {
          ...state,
          errors: {
            ...state.errors,
            name: {
              status: (state.name.length === 0 || state.name.length >= 64),
              message: ((state.name.length === 0 && "you have to enter a name.") ||
                        (state.name.length >= 64 && "your name must be under 64 characters."))
            },
            mail: {
              status: !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(state.mail)),
              message: (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(state.mail) && "you must enter a valid email.")
            },
            message: {
              status: (state.message.length === 0),
              message: (state.message.length === 0 && "you have to enter a message.")
            }
          }
        }
      case ActionTypes.FETCH:
        return {
          ...state,
          fetching: true
        }
      case ActionTypes.FULLFILLED:
        return {
          ...initialState.contact,
          fetching: false,
          errors: {
            ...state.errors,
            fetching: {
              status: false,
              message: "success"
            }
          }
        }
      case ActionTypes.ERROR:
        return {
          ...state,
          fetching: false,
          errors: {
            ...state.errors,
            fetching: {
              status: true,
              message: action.payload.message
            }
          }
        }
      case ActionTypes.DISSMISS:
        return {
          ...state,
          errors: {
            ...state.errors,
            fetching: {
              status: false
            }
          }
        }
      default:
        return state;
    }
  },
});