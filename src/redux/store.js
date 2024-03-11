import reducers from "./reducers/index";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
export const store = createStore(
  //membuat store redux
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
