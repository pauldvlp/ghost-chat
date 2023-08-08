import { useContext, useEffect, useState } from 'react'

import AppContext from '../context/contextApp'

const useChatLogs = () => {
  const [logs, setLogs] = useState([])
  const { socket } = useContext(AppContext)

  const handleLogs =
    (status) =>
      ({ username }) => {
        setLogs((prevLogs) => [...prevLogs, { username, status }])
      }

  useEffect(() => {
    socket.on('user-connected', handleLogs('conectado'))
    socket.on('user-disconnected', handleLogs('desconectado'))

    return () => {
      socket.off('user-connected')
      socket.off('user-disconnected')
    }
  }, [socket])

  return logs
}

export default useChatLogs
