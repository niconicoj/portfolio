import { combineEpics } from 'redux-observable';

import * as contactEpics from './contact/epics';

export default combineEpics(...Object.values(contactEpics));
