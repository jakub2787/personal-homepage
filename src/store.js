
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/personalHomepage/ThemeSwitch/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeSlice,
    },
});

export default store;