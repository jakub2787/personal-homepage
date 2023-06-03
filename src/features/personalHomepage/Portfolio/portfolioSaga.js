import { call, takeLatest } from "redux-saga/effects";
import { getPortfolio } from "./getPortfolio";

function* fetchReposHandler() {
    yield call(getPortfolio);
}

export function* portfolioSaga() {
    yield takeLatest("*", fetchReposHandler);
};