import { FETCH_CATEGORY_JOBS } from "../action";

const initialState = {
  allCategoryJobs: [],

  error: null,
};

const allCategoryJobs = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_JOBS:
      return {
        ...state,
        allCategoryJobs: action.payload.data,
      };

    default:
      return state;
  }
};

export default allCategoryJobs;
