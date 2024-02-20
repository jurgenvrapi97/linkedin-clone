import { FETCH_EXPERIENCES } from '../action'

const initialState = {
  allExperiences: {},

  error: null,
}

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES:
      return {
        ...state,
        allExperiences: action.payload,
      }

    default:
      return state
  }
}

export default experiencesReducer
