import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';

export const update = (id: string, value: string) => action(ActionTypes.UPDATE, {id: id, value: value});
export const validate = () => action(ActionTypes.VALIDATE);
export const fetch = () => action(ActionTypes.FETCH);
export const fullfilled = () => action(ActionTypes.FULLFILLED);