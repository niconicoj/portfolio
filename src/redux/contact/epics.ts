import { RootAction, RootState } from 'MyTypes';
import { Epic, ofType } from 'redux-observable';
import { mapTo, filter, switchMap, catchError, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

import * as Actions from './actions';
import { ActionTypes } from './constants';

export const checkAction: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) => 
  action$.pipe(
    ofType(ActionTypes.VALIDATE),
    filter(() => {
      let passed = true
      Object.values(state$.value.contact.contact.errors).forEach((val) => {
        if(val?.status) {
          passed = false
        }
      })
      return passed
    }),
    mapTo({type: ActionTypes.FETCH})
  );

export const fetchAction: Epic<RootAction, RootAction, RootState> = (
  action$,
  state$
) => 
  action$.pipe(
    ofType(ActionTypes.FETCH),
    switchMap( action =>
      ajax(  
        {
          url: 'http://api.niconico.io/api/send/mail',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: {
            name: state$.value.contact.contact.name,
            mail: state$.value.contact.contact.mail,
            message: state$.value.contact.contact.message,
          }
        }
      ).pipe(
        map(response => {
          return Actions.fullfilled(response.response.status);
        }),
        catchError( error => {
          return of(Actions.error('An error occured, the message could not be delivered.'));
        })
      )
    )
  );
