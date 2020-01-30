import ContactAction, { ActionTypes } from "../actions/contact"

interface Ierror {
  status : boolean,
  message?: string | boolean
}

export interface State {
  name: string,
  mail: string,
  company?: string,
  message: string,
  errors: {
    name: Ierror,
    mail: Ierror,
    company?: Ierror,
    message: Ierror,
  }
}

export const initialState: State = {
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
}

export function contactReducer(state: State = initialState, action: ContactAction) {
  switch (action.type){
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
    default:
      return state
  }
}