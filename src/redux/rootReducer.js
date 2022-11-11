import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { bitcoinReducer } from './bitcoin/bitcoinReducer';


export const rootReducer = combineReducers({
  user: userReducer,
  bitcoin: bitcoinReducer,
});

export default rootReducer;