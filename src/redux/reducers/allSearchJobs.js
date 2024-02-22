import { FETCH_SEARCH_JOBS } from "../action";

const initialState = {
  allSearchJobs: [],

  error: null,
};

const allSearchJobs = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_JOBS:
      return {
        ...state,
        allSearchJobs: action.payload.data,
      };

    default:
      return state;
  }
};

export default allSearchJobs;
