import { FETCH_ALL_COMMENTS } from "../action";

const initialState = {
  allComments: [],

  error: null,
};

const allComments = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_COMMENTS:
      return {
        ...state,
        allComments: action.payload,
      };

    default:
      return state;
  }
};

export default allComments;
