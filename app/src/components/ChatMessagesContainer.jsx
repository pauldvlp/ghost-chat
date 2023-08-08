import { useContext, useEffect, useRef } from 'react'
import ChatContext from '../context/contextChat'
import Message from './ChatMessage'

const ChatMessages = () => {
  const container = useRef(null)
  const { messages } = useContext(ChatContext)

  useEffect(() => {
    setTimeout(() => {
      container.current.scrollTo({ top: container.current.scrollHeight })
    }, 100)
  }, [messages])

  return (
    <section ref={container} className="[grid-area:messages] overflow-y-auto">
      {messages.map((message, index) => (
        <Message
          container={container.current}
          key={message.id}
          message={message}
          prevMessage={Boolean(index) && messages.at(index - 1)}
        />
      ))}
    </section>
  )
}

export default ChatMessages
