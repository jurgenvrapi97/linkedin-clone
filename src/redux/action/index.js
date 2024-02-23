export const FETCH_USER_PROFILE = "FETCH_USER_PROFILE";
export const DELETE_USER_PROFILE = "DELETE_USER_PROFILE";
export const FETCH_USER_GENERIC = "FETCH_USER_GENERIC";
export const FETCH_USER_ID = "FETCH_USER_ID";
export const FETCH_EXPERIENCES = "FETCH_EXPERIENCES";
export const CREATE_EXPERIENCES = "CREATE_EXPERIENCES";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_JOBS = "FETCH_JOBS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_SEARCH_JOBS = "FETCH_SEARCH_JOBS";
export const FETCH_COMPANY_JOBS = "FETCH_COMPANY_JOBS";
export const FETCH_CATEGORY_JOBS = "FETCH_CATEGORY_JOBS";
export const FETCH_ALL_COMMENTS = "FETCH_ALL_COMMENTS";

export const fetchProfile = (token) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/me",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    dispatch({ type: FETCH_USER_PROFILE, payload: data });
  };
};

// AZIONE PER FARE LOG OUT

export const logOutAction = () => {
  return {
    type: DELETE_USER_PROFILE,
  };
};

// RICERCA DI TUTTI I PROFILI ISCRITTI NELL'API

export const fetchGeneric = (token) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    dispatch({ type: FETCH_USER_GENERIC, payload: data });
  };
};

// RICERCA PROFILO SPECIFICO TRAMITE ID

export const fetchId = (token, id) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" + id,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    dispatch({ type: FETCH_USER_ID, payload: data });
  };
};

export const fetchExperiences = (token, id) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        id +
        "/experiences",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);

    dispatch({ type: FETCH_EXPERIENCES, payload: data });
  };
};

export const fetchExperiencesCreate = (token, id, exp) => {
  return async (dispatch) => {
    const body = JSON.stringify(exp);
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        id +
        "/experiences",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: body,
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    dispatch({ type: CREATE_EXPERIENCES, payload: data });
  };
};

export const fetchExperiencesAction = (
  token,
  id,
  expId,
  method,
  exp = null
) => {
  return async (dispatch) => {
    const options = {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    if (method !== "GET" && exp) {
      options.body = JSON.stringify(exp);
    }

    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        id +
        "/experiences/" +
        expId,
      options
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    if (method !== "DELETE") {
      const data = await response.json();

      dispatch({ type: method, payload: data });
    } else {
      dispatch({ type: method });
    }
    if (method === "PUT" || method === "DELETE") {
      fetchExperiences(token, id);
    }
  };
};

export const fetchAllPosts = (token) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    dispatch({ type: FETCH_POSTS, payload: data });
  };
};

export const fetchCreatePost = (token, post) => {
  return async (dispatch) => {
    const body = JSON.stringify(post);
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/",
      {
        method: "POST",
        body: body,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    dispatch({ type: CREATE_POST, payload: data });
  };
};

export const fetchPostAction = (token, postId, method, exp = null) => {
  return async (dispatch) => {
    const options = {
      method: `${method}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    if (method !== "GET" && exp) {
      options.body = JSON.stringify(exp);
    }

    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/${postId}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    dispatch({ type: method, payload: data });
  };
};

export const fetchAllJobs = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://strive-benchmark.herokuapp.com/api/jobs"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dispatch({ type: FETCH_JOBS, payload: data });
  };
};

export const fetchSearchAllJobs = (value) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://strive-benchmark.herokuapp.com/api/jobs?search=" + value
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dispatch({ type: FETCH_SEARCH_JOBS, payload: data });
  };
};

export const fetchAllComments = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3Y2Q5Mzg5Y2Y4ZDAwMTljZjRiY2MiLCJpYXQiOjE3MDg2NDE2ODQsImV4cCI6MTcwOTg1MTI4NH0.eBYbHC9D-o7HqIOpz9V8q0WB6AHoLhQmx-Got7_fs-I",
        },
        "Content-Type": "application/json",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dispatch({ type: FETCH_ALL_COMMENTS, payload: data });
  };
};

export const fetchCompanyAllJobs = (value) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://strive-benchmark.herokuapp.com/api/jobs?company=" + value
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dispatch({ type: FETCH_COMPANY_JOBS, payload: data });
  };
};

export const fetchCategoryAllJobs = (value) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?category=${value}&limit=10`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dispatch({ type: FETCH_CATEGORY_JOBS, payload: data });
  };
};
