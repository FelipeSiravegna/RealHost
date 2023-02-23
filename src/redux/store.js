import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import usersSaga from './usersSaga'
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(usersSaga)

export default store;