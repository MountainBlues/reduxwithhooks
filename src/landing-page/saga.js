import { put, takeEvery, call } from 'redux-saga/effects'
import { get } from 'axios'
import { getProjectListSuccess, getProjectListFailure } from './action'

function* fetchProjectList() {
    const response = yield call(get, 'https://jsonplaceholder.typicode.com/posts')
    if (response.data) {
        yield put(getProjectListSuccess(response.data))
    } else {
        yield put(getProjectListFailure())
    }
}

function* watchEveryLandingPage() {
    yield takeEvery('INITIATE_PROJECT_LIST', fetchProjectList)
}

export default watchEveryLandingPage