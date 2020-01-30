import * as fromContact from './contact'
import { combineReducers } from 'redux'

export interface State {
  contact: fromContact.State
}

export const initialState: State = {
  contact: fromContact.initialState
}

export const rootReducer = combineReducers<State>({
  contact: fromContact.contactReducer
})