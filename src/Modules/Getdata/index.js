import { call, put, takeLatest } from "redux-saga/effects";
import { error, success } from "redux-saga-requests";
import {axios} from "../app/index";
import nomalize from "./../../Utils/normiliseServerResponce";
import {
    GET_DATA
} from './reducer'

export function* getDataWorker({payload}){
    try {
        const get_data = yield call(axios.get,"categories");
        console.log('get_data', nomalize(get_data));
        yield put({
            type: success(get_data),
            payload:{
                get_rate:nomalize(get_data)
            }
        })
        // alert('LogOut');
      
    } catch (e) {
        const parseError = yield JSON.parse(JSON.stringify(e));
        const message = parseError.data || parseError.response
        console.log('withdraw fee error', message)
        yield put({
            type:error(DATA),
            payload:{errorGetWithdrawFee:message}
        })
    }
}

export function* DataSaga(){
    yield takeLatest(GET_DATA,getDataWorker);
}