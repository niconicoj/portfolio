import { createAction } from 'typesafe-actions';
import { ActionTypes } from './constants';

export const updateAction = createAction(ActionTypes.UPDATE)<{id: string, value: string}>();
export const validateAction = createAction(ActionTypes.VALIDATE)();