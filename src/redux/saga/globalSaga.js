import { GET_DATA } from '../types';
import { takeLatest, put, call } from "redux-saga/effects";
import { api } from "./api";
import { putSearchData } from '../action'


function* getDataSaga(param) {
  try {
    const result = yield call(api.getData, param.payload);

    yield put(putSearchData(result));
  } catch (error) {
    console.log(error)
  }
}

export function* watchGlobal() {
  yield takeLatest(GET_DATA, getDataSaga);
}