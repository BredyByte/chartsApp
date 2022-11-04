import { userTypes, bitcoinTypes, GET_DATA } from '../types';
import { setBitcoin } from '../bitcoin/bitcoinAction';
import { setUser } from '../user/userAction';
import { call, put, takeEvery, fork, all } from 'redux-saga/effects';
import moment from 'moment';

const fetchData = (link) => fetch(`${link}`).then(res => res.json());

function* getUser(api, label, dataMap) {
  try {
    yield put({type: userTypes.AWAITING_USER});
    let response = yield call(fetchData, api);
    let data = [];
    if( dataMap === "userLost") {
      data = response.map(i => i.userLost);
    } else {
      data = response.map(i => i.userGain);
    }
    const labels = response.map(i => i.year);
    yield put(setUser({data, labels, label}));
  } catch {
    yield put({type: userTypes.USER_REJECTED })
  }
}

function* getBitcoin(api, num) {
  try {
    console.log(num)
    yield put({type: bitcoinTypes.AWAITING_BITCOIN});
    const response = yield call(fetchData, api);
    const data = response.map(i => i.close);
    const labels = response.map(i => (moment(i.date).calendar()));
    yield put(setBitcoin({data, labels}));
  } catch {
    yield put({type: bitcoinTypes.BITCOIN_REJECTED })
  }
}


function* handleData({ payload }) {
  yield all([
    fork(() => (getBitcoin(payload.bitcoin.api,payload.bitcoin.num))),
    fork(() => (getUser(payload.user.api, payload.user.label)))
  ]);
}

function* handleUser({ payload }) {
  yield fork(() => getUser(payload.api, payload.label, payload.dataMap))
}

function* handleBitcoin({ payload }) {
  yield fork(() => getBitcoin(payload.api))
}

function* dataWatcher() {
  yield takeEvery(GET_DATA, handleData);
  yield takeEvery(userTypes.GET_USER, handleUser);
  yield takeEvery(bitcoinTypes.GET_BITCOIN, handleBitcoin);
}

export default function* rootSaga() {
  yield dataWatcher();
}