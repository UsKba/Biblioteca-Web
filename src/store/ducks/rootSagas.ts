import { all } from 'redux-saga/effects';

import mystate from './mystate_EXAMPLE/sagas';

export default function* rootSaga() {
  yield all([mystate]);
}
