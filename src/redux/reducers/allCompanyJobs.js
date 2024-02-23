import { FETCH_COMPANY_JOBS } from "../action";

const initialState = {
  allCompanyJobs: [],

  error: null,
};

const allCompanyJobs = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANY_JOBS:
      return {
        ...state,
        allCompanyJobs: action.payload.data,
      };

    default:
      return state;
  }
};

export default allCompanyJobs;
