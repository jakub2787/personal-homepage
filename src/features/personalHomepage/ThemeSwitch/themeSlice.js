import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isdarkMode: false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.isdarkMode = !state.isdarkMode
        },
    },
});

export const { toggleTheme } = themeSlice.actions;


export const selectModeSwitch =  state => selectModeState(state).isdarkMode;

export const selectModeState = state => state.theme;

export default themeSlice.reducer;