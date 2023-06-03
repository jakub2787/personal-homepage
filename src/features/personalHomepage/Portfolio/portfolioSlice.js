import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        repos: [],
    },
    reducers: {},
});

export const selectPortfolioState = (state) => state.portfolio;
export const selectRepos = (state) => selectPortfolioState(state).repos;

export default portfolioSlice.reducer;