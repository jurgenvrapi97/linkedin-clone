import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchProfile from './redux/action'

import './App.css'

function App() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.user)
  const tokens = useSelector((state) => state.tokens)
  const [username, setUsername] = useState('')

  useEffect(() => {
    const token = tokens[username]
    if (token) {
      dispatch(fetchProfile(token))
    }
  }, [dispatch, tokens, username])

  const handleInputChange = (event) => {
    setUsername(event.target.value.toLowerCase())
  }
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
            <p>Nome: {profile.name}</p>
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
