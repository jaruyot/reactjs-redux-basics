import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import user from "./reducers/userReducer";
import rooms from "./reducers/roomReducer";

export default createStore(
    combineReducers({
        user,
        rooms
    }),
    {},
    applyMiddleware(logger())
);