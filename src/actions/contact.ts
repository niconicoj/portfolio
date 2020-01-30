export enum ActionTypes {
  UPDATE = '[contact] UPDATE',
  VALIDATE = '[contact] VALIDATE',
}

interface UpdateContactAction {type: ActionTypes.UPDATE, payload: {id: string, value: string }}
interface ValidateContactAction {type: ActionTypes.VALIDATE}

// eslint-disable-next-line
export function updateContact(id: string, value: string): UpdateContactAction {
  return {type: ActionTypes.UPDATE,payload: {id: id, value: value}}
}
// eslint-disable-next-line
export function validateContact(id: string): ValidateContactAction {
  return {type: ActionTypes.VALIDATE}
}

type ContactAction = UpdateContactAction | ValidateContactAction
export default ContactAction