import { createAction, createTypes, RequestAction } from "../../store/utils";

// Types
export const REQUEST = createTypes("REQUEST", ["START", "SUCCESS", "ERROR"]);

// Actions
export const request = {
  start: (requestCreator: string): RequestAction =>
    createAction(REQUEST.START, null, {
      creator: requestCreator,
    }) as RequestAction,

  success: (requestCreator: string, payload: any): RequestAction =>
    createAction(REQUEST.SUCCESS, payload, {
      creator: requestCreator,
    }) as RequestAction,

  error: (requestCreator: string, error: any): RequestAction =>
    createAction(
      REQUEST.ERROR,
      null,
      { creator: requestCreator },
      error
    ) as RequestAction,
};
