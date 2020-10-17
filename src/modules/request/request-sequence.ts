import { put, call } from "redux-saga/effects";
import { request as requestActions } from "./store";

export function* requestSequence<Fn extends (...args: any[]) => Promise<any>>(
  requestCreator: string,
  requestFn: Fn,
  ...args: Parameters<Fn>
) {
  try {
    // Send a REQUEST_START action to notify other sagas or reducers
    yield put(requestActions.start(requestCreator));
    // Perform the request
    const result = yield call(requestFn, ...args);
    // Dispatch a REQUEST_SUCCESS action and also return it
    return yield put(requestActions.success(requestCreator, result));
  } catch (err) {
    // Dispatch a REQUEST_ERROR action and return it
    return yield put(requestActions.error(requestCreator, err));
  }
}
