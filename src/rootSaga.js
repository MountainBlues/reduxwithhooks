import { all } from 'redux-saga/effects'
import watchEveryLandingPage from './landing-page/saga'

export default function* rootSaga() {
    yield all([
        watchEveryLandingPage()
    ])
}