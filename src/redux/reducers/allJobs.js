import { FETCH_JOBS } from "../action";

const initialState = {
  allJobs: [],

  error: null,
};

const allJobs = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        allJobs: action.payload.data,
      };

    default:
      return state;
  }
};

export default allJobs;
