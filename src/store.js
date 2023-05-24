import createSagaMiddleware from 'redux-saga';
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/personalHomepage/ThemeSwitch/themeSlice";
import { themeSaga } from "./features/personalHomepage/ThemeSwitch/themeSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeSlice,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(themeSaga);

export default store;