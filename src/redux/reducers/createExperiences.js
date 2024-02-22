import { CREATE_EXPERIENCES } from '../action'

const initialState = {
  newExperiences: [],
}

const createreducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EXPERIENCES:
      return {
        ...state,
        newExperiences: [...state.newExperiences, action.payload],
      }

    default:
      return state
  }
}

export default createreducer
