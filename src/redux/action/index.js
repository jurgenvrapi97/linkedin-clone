export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'

const fetchProfile = (token) => {
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

    dispatch({ type: FETCH_USER_SUCCESS, payload: data })
  }
}

export default fetchProfile
