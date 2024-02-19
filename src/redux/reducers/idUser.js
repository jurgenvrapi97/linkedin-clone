import { FETCH_USER_ID } from '../action'

const initialState = {
  user: {},

  error: null,
}

const userIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_ID:
      return {
        ...state,
        user: action.payload,
      }

    default:
      return state
  }
}

export default userIdReducer
