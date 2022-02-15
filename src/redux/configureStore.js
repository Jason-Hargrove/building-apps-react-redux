import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // this will add support for Redux dev tools.

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}

// Redux middleware is a way to enhance Redux's behivior.
// * reduxImmutableStateInvariant will warn us if we accidentally mutate Redux state.
// It's a safty net.
// * Redux Dev tools are handy for interacting with the Redux Store.
