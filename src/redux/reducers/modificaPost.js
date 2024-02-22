const initialState = {
  data: null,
};

const modificaPost = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
    case "PUT":
    case "DELETE":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default modificaPost;
