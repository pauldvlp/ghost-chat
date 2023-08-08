import { useContext, useEffect, useMemo, useState } from 'react'
import useLocalStorage from './useLocalStorage'

import AppContext from '../context/contextApp'

const useLogin = () => {
  const [error, setError] = useState(null)
  const [credentials, setCredentials] = useLocalStorage({ key: 'username' })
  const { socket } = useContext(AppContext)

  useEffect(() => {
    window.addEventListener('storage', (event) => {
      setCredentials(JSON.parse(event.newValue))
    })

    socket.on('login-success', ({ username }) => {
      setCredentials({ username })
      setError(null)
    })

    socket.on('login-error', ({ message }) => {
      setError(message)
    })

    socket.on('logout-success', () => {
      setCredentials({ username: '' })
    })

    socket.on('non-existent-session', () => {
      setCredentials({ username: '' })
    })

    socket.emit('has-session', credentials)
  }, [])

  const isLogged = useMemo(() => Boolean(credentials.username), [credentials])

  return { ...credentials, error, isLogged }
}

export default useLogin
