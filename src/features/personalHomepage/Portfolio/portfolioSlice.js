import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        repos: null,
        status: "initial"
    },
    reducers: {
        fetchPortfolioLoading: () => ({
            status: "loading",
            repositories: null,
        }),
        fetchPortfolioSuccess: (_, { payload: repos }) => ({
            status: "success",
            repos,
    }),
    },
});

export const {
    fetchPortfolioSuccess,
    fetchPortfolioLoading,
} = portfolioSlice.actions

export const selectPortfolioState = (state) => state.portfolio;
export const selectRepos = (state) => selectPortfolioState(state).repos;
export const selectStatus = (state) => selectPortfolioState(state).status;

export default portfolioSlice.reducer;