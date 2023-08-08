import PropTypes from 'prop-types'
import { useContext, useMemo } from 'react'
import LoginContext from '../context/contextLogin'

const Message = ({ message, prevMessage }) => {
  const { username } = useContext(LoginContext)

  const isMyself = useMemo(
    () => username === message.username,
    [username, message]
  )

  return (
    <article
      className={`Message ${isMyself ? 'message-myself' : 'message-someone'}`}
    >
      <div>
        {prevMessage.username !== message.username && !isMyself && (
          <span>{message.username}</span>
        )}
        <p>{message.text}</p>
      </div>
    </article>
  )
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
  prevMessage: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
}

export default Message
