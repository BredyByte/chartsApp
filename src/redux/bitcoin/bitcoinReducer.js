import {
  bitcoinTypes
} from '../types'

const initialState = {
  loading: false,
  data: {
    labels: [],
    datasets: []
  }
}

export const bitcoinReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case bitcoinTypes.AWAITING_BITCOIN:
      return {
        ...state,
        loading: true
      }
    case bitcoinTypes.BITCOIN_REJECTED:
      return {
        ...state,
        loading: false
      }
    case bitcoinTypes.SET_BITCOIN:
      return {
        ...state,
        loading: false,
        data: {
          labels: payload.labels,
          datasets: [{
            label: "Bitcoin Price",
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
    default:
      return state
  }
}