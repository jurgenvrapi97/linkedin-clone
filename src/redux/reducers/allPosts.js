import { FETCH_POSTS } from "../action";

const initialState = {
  allPosts: [],

  error: null,
};

const allPosts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        allPosts: action.payload,
      };

    default:
      return state;
  }
};

export default allPosts;
