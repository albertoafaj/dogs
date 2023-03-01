import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import photo from "./photo";

const middleware = [...getDefaultMiddleware(), logger]
const reducer = combineReducers({
  photo
});
const store = configureStore({ reducer, middleware });
export default store;