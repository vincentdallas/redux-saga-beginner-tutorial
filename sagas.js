import {put, takeEvery, all, call, takeLatest} from 'redux-saga/effects'
import { API_Callout, request_api_data} from "./action";
import {fetchData} from './api';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
    console.log('Hello Sagas!')
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* getApiData(action) {
    try{
        const data =yield call(fetchData);
        // dispatch the action to the store containing  the data
        yield put(API_Callout(data));
        console.log('api called')
    } catch (e) {
        console.log(e);
    }
}

function* actionWatcher() {
    yield takeEvery('API_Callout', getApiData)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        actionWatcher()
    ])
}