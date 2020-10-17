import { Action as ReduxAction, Reducer as ReduxReducer } from "redux";

import rootReducer from "./root-reducer";

export interface Action<P = any, M = any> extends ReduxAction {
  payload?: P;
  meta?: M;
  error?: any;
}

export type RequestAction<P = any> = ReduxAction & {
  payload?: P;
  meta: { creator: string };
  error?: any;
};

export type Reducer<T = any, A extends Action = Action> = ReduxReducer<T, A>;

export const createAction = <P = any, M = any>(
  type: string,
  payload?: P,
  meta?: M,
  error?: any
): Action<P, M> => ({
  type,
  payload,
  meta,
  error,
});

export const createTypes = <T extends string>(
  source: string,
  types: T[]
): Record<T, string> =>
  types.reduce(
    (acc, type) => ({ ...acc, [type]: `${source}/${type}` }),
    {} as Record<T, string>
  );

export type Store = ReturnType<typeof rootReducer>;

export type Selector<T = any> = (state: Store) => T;
