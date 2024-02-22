import { CREATE_POST } from "../action";

const initialState = {
  createPost: [],
};

const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        createPost: action.payload,
      };

    default:
      return state;
  }
};

export default createPostReducer;
