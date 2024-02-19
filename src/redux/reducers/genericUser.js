import { FETCH_USER_GENERIC } from '../action'

const initialState = {
  user: {},

  error: null,
}

const userGenericReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_GENERIC:
      return {
        ...state,
        user: action.payload,
      }

    default:
      return state
  }
}

export default userGenericReducer
