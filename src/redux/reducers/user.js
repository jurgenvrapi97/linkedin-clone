import { FETCH_USER_SUCCESS } from '../action'

const initialState = {
  user: {},
  tokens: {
    jurgen:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTUwMzI0ZjYwNTAwMTkzN2Q0NjkiLCJpYXQiOjE3MDgzMzIyOTEsImV4cCI6MTcwOTU0MTg5MX0.Dvp9xjhvg1QFWbOGGaWpXWP1M-7JHhQLM0zCwLO1doM',
    alessia:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFlYjI0ZjYwNTAwMTkzN2Q0NTgiLCJpYXQiOjE3MDgzMzE0OTksImV4cCI6MTcwOTU0MTA5OX0.81fG3GgOyqrD0Sv-zDj1zyT8AYqXCPXKCEzQCmdAro8',
    dalila:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTRkNDI0ZjYwNTAwMTkzN2Q0NjgiLCJpYXQiOjE3MDgzMzIyNDQsImV4cCI6MTcwOTU0MTg0NH0.S00XcoY8VQPMfjLf3puqJxgg3fodpUv_3iOPpcxYig8',
    davide:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTFkYzI0ZjYwNTAwMTkzN2Q0NTQiLCJpYXQiOjE3MDgzMzE0ODQsImV4cCI6MTcwOTU0MTA4NH0.M3Njav2sgKqdFFqpF173GcWV2z-w8PJiY1NAIk3tepY',
  },
  error: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
