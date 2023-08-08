import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import notificacionPath from '../assets/notificacion.mp3'
import AppContext from '../context/contextApp'
import LoginContext from '../context/contextLogin'

const useChat = () => {
  const notificationTone = useRef(new Audio(notificacionPath))
  const [messages, setMessages] = useState([])
  const { username } = useContext(LoginContext)
  const { socket } = useContext(AppContext)

  const sendMessage = useCallback((text) => {
    if (text === '') return
    socket.emit('send-message', { text, username })
  }, [socket, username])

  useEffect(() => {
    socket.on('new-message', (message) => {
      setMessages((prevMessages) => ([...prevMessages, message]))

      if (message.username !== username) {
        notificationTone.current.pause()
        notificationTone.current.currentTime = 0
        notificationTone.current.play()
      }
    })

    return () => socket.off('new-message')
  }, [socket])

  return { messages, sendMessage }
}

export default useChat
