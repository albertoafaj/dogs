import { combineReducers, configureStore } from "@reduxjs/toolkit";

const middleware = (getDefaultMiddleware) => ([...getDefaultMiddleware()])
const reducer = combineReducers({

});
const store = configureStore({ reducer, middleware });
export default store;