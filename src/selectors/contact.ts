import { State } from '../reducers'
import { createSelector } from 'reselect'

const getContactState = ((state: State) => state.contact)

export const getContact = createSelector([getContactState], state => state)