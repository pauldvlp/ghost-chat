import PropTypes from 'prop-types'
import React from 'react'
import useSocket from '../hooks/useSocket'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const socket = useSocket({ url: '/' })

  return (
    <AppContext.Provider value={{ socket }}>{children}</AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { AppProvider }
export default AppContext
