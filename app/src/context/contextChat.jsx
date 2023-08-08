import PropTypes from 'prop-types'
import React from 'react'
import useChat from '../hooks/useChat'

const ChatContext = React.createContext()

const ChatProvider = ({ children }) => {
  const { messages, sendMessage } = useChat()

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>{children}</ChatContext.Provider>
  )
}

ChatProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { ChatProvider }
export default ChatContext
