import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGeneric, fetchProfile, fetchId } from './redux/action'

import './App.css'

function App() {
  const dispatch = useDispatch()
  const genericProfiles = useSelector((state) => state.genericUser.user)
  const profile = useSelector((state) => state.user.user)
  const tokens = useSelector((state) => state.user.tokens)
  const [username, setUsername] = useState('')

  useEffect(() => {
    const token = tokens[username]
    if (token) {
      dispatch(fetchProfile(token))
      dispatch(fetchGeneric(token))
    }
  }, [dispatch, tokens, username])

  const handleInputChange = (event) => {
    setUsername(event.target.value.toLowerCase())
  }

  const handleUserNameClick = () => {
    if (profile && tokens[username]) {
      dispatch(fetchId(tokens[username], profile._id))
      console.log('fatto')
    }
  }
  console.log(genericProfiles)
  return (
    <>
      <div>
        <h1>Profilo utente</h1>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Inserisci il nome utente"
        />
        {tokens[username] && profile && (
          <div>
            <p onClick={handleUserNameClick}>Nome: {profile.name}</p>
            <p>Cognome: {profile.surname}</p>
            <p>Email: {profile.email}</p>
            <img src={profile.image} alt="" />
          </div>
        )}
      </div>
    </>
  )
}

export default App
