import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";
import rootReducer from "./root-reducer";

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware({
    onError: (error, errorInfo) => {
      if (process.env.NODE_ENV !== "production") {
        console.error("[SAGA_MIDDLEWARE_ERROR]", error, errorInfo);
      }
    },
  });
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  let sagaTask = sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./root-reducer", () =>
      store.replaceReducer(rootReducer)
    );

    module.hot.accept("./root.saga", () => {
      sagaTask.cancel();
      sagaTask.toPromise().then(() => {
        sagaTask = sagaMiddleware.run(require("./root.saga").default);
      });
    });
  }

  return store;
}

export const store = configureStore();
