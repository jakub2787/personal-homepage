
import { all } from "redux-saga/effects";
import { themeSaga } from "./features/personalHomepage/ThemeSwitch/themeSaga";

export default function* rootSaga() {
    yield all([
        themeSaga(),
    ])
};