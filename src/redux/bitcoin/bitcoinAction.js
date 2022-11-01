import { bitcoinTypes } from '../types';


export const setBitcoin = payload => ({
  type: bitcoinTypes.SET_BITCOIN,
  payload,
});
