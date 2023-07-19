import React, { useEffect } from 'react'
import Login from './components/Login/Login'
import Spotify from './components/Spotify/Spotify';
import { useStateProvider } from './utils/StateProvider'
import { reducerCases } from './utils/Constants';

export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1]
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token })
      }
    }
    document.title = 'Spotify'
  }, [token, dispatch])

  return (
    <div>
      {token ? <Spotify /> : <Login />}
    </div>
  )
}
