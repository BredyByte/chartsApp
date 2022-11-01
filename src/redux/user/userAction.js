import { userTypes } from '../types';


export const setUser = payload => ({
  type: userTypes.SET_USER,
  payload,
});

export const getUser = payload => ({
  type: userTypes.GET_USER,
  payload,
})