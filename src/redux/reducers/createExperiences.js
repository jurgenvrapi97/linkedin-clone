import { CREATE_EXPERINCES } from '../action'

const initialState = {
  newExperiences: [],
}

const createreducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EXPERINCES:
      return {
        ...state,
        experiences: [...state.newExperiences, action.payload],
      }

    default:
      return state
  }
}

export default createreducer
