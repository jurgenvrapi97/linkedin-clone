export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE'
export const FETCH_USER_GENERIC = 'FETCH_USER_GENERIC'
export const FETCH_USER_ID = 'FETCH_USER_ID'
export const FETCH_EXPERIENCES = 'FETCH_EXPERIENCES'
export const CREATE_EXPERIENCES = 'CREATE_EXPERIENCES'

export const fetchProfile = (token) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/profile/me',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    dispatch({ type: FETCH_USER_PROFILE, payload: data })
  }
}

// RICERCA DI TUTTI I PROFILI ISCRITTI NELL'API

export const fetchGeneric = (token) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/profile/',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    dispatch({ type: FETCH_USER_GENERIC, payload: data })
  }
}

// RICERCA PROFILO SPECIFICO TRAMITE ID

export const fetchId = (token, id) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/profile/' + id,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    dispatch({ type: FETCH_USER_ID, payload: data })
  }
}

export const fetchExperiences = (token, id) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/profile/' +
        id +
        '/experiences',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    console.log(data)

    dispatch({ type: FETCH_EXPERIENCES, payload: data })
  }
}

export const fetchExperiencesCreate = (token, id, exp) => {
  return async (dispatch) => {
    const body = JSON.stringify(exp)
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/profile/' +
        id +
        '/experiences',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: body,
      }
    )

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    dispatch({ type: CREATE_EXPERIENCES, payload: data })
  }
}

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
        'Content-Type': 'application/json',
      },
    }

    if (method !== 'GET' && exp) {
      options.body = JSON.stringify(exp)
    }

    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/profile/' +
        id +
        '/experiences/' +
        expId,
      options
    )

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    dispatch({ type: method, payload: data })
  }
}
