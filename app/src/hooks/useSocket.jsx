import { useEffect, useState } from 'react'

import { io } from 'socket.io-client'

const useSocket = ({ url = 'http://192.168.1.25:3000' } = {}) => {
  const [socket, setSocket] = useState(io(url))

  useEffect(() => {
    socket.on('connect', () => {
      setSocket(socket)
    })

    return () => {
      socket.disconnect()
    }
  }, [socket])

  return socket
}

export default useSocket
