import PropTypes from 'prop-types'
import React, { useCallback, useContext } from 'react'
import useLogin from '../hooks/useLogin'

import AppContext from './contextApp'

const LoginContext = React.createContext()

const LoginProvider = ({ children }) => {
  const { socket } = useContext(AppContext)
  const { username, error, isLogged } = useLogin()

  const handleLogIn = useCallback(({ username }) => {
    socket.emit('login', { username })
  }, [socket])

  const handleLogOut = useCallback(() => {
    socket.emit('logout', { username })
  }, [socket, username])

  const value = { username, error, isLogged, handleLogIn, handleLogOut }

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  )
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { LoginProvider }
export default LoginContext
