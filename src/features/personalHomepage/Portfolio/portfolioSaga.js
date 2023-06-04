import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPortfolio } from "./getPortfolio";
import { fetchPortfolioLoading, fetchPortfolioSuccess } from "./portfolioSlice";


function* fetchPortfolioHandler() {
    try {
        yield delay(1000);
        const repositories = yield call(getPortfolio);
        yield put(fetchPortfolioSuccess(repositories));
    }

    catch (error) {
        yield call(alert, "Błąd pobierania, spróbuj ponownie później");
    }
}

export function* portfolioSaga() {
    yield takeLatest(fetchPortfolioLoading.type, fetchPortfolioHandler);
};