import { userTypes } from '../types'

const initialState = {
  loading: false,
  data: {
    labels: [],
    datasets: []
  }
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case userTypes.AWAITING_USER:
      return {
        ...state,
        loading: true
      }
    case userTypes.USER_REJECTED:
      return {
        ...state,
        loading: false
      }
    case userTypes.SET_USER:
      return {
        ...state,
        loading: false,
        data: {
          labels: payload.labels,
          datasets: [{
            label: payload.label,
            data: payload.data,
            backgroundColor: [
              "#4bc0c0",
              "#ecf0f1",
              "#f396ff",
              "#f3ba2f",
              "#2a71d0",
              "#fffca0",
              "#ff5a90"
            ],
            borderColor: "black",
            borderWidth: 2
          }]
        }
      }
    default: return state
  }
}

