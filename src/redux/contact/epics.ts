import { RootAction, RootState } from 'MyTypes';
import { Epic, ofType } from 'redux-observable';
import { tap, ignoreElements, filter, mapTo } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import { ActionTypes } from './constants';

export const sendAction: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) => 
  action$.pipe(
    ofType(ActionTypes.VALIDATE),
    mapTo({type: ActionTypes.FETCH})
  );
