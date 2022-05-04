import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { appReducer, tourismReducer } from "./appRedux";

const rootReducers = combineReducers({
  app: appReducer,
  tourismReducer: tourismReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
