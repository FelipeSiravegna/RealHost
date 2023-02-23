import { put, takeEvery } from 'redux-saga/effects'
import { GET_USERS, SET_USERS } from './constant';

function* getUsers() {
    let users = yield fetch('https://jsonplaceholder.typicode.com/users');
    users = yield users.json();

    yield put({ type: SET_USERS, payload: users })
}

function* usersSaga() {
    yield takeEvery(GET_USERS, getUsers)
}

export default usersSaga;