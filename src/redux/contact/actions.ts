import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';

//form handling and validation
export const update = (id: string, value: string) => action(ActionTypes.UPDATE, {id: id, value: value});
export const validate = () => action(ActionTypes.VALIDATE);

// fetching and promise handling
export const fetch = () => action(ActionTypes.FETCH);
export const fullfilled = (message: string) => action(ActionTypes.FULLFILLED, {message: message});
export const error = (message: string) => action(ActionTypes.ERROR, {message: message});
export const dissmissError = () => action(ActionTypes.DISSMISS);