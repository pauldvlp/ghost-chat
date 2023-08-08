import { useContext, useEffect, useState } from 'react'

import AppContext from '../context/contextApp'

const useUsersOnlineCount = () => {
  const [usersCount, setUsersCount] = useState(0)
  const { socket } = useContext(AppContext)

  const decrementUsersCount = () => setUsersCount(prevCount => --prevCount)
  const incrementUsersCount = () => setUsersCount(prevCount => ++prevCount)

  useEffect(() => {
    socket.on('total-users', ({ totalUsers }) => setUsersCount(totalUsers))
    socket.on('user-connected', incrementUsersCount)
    socket.on('user-disconnected', decrementUsersCount)

    socket.emit('total-users')

    return () => {
      socket.off('total-users')
      socket.off('user-connected')
      socket.off('user-disconnected')
    }
  }, [socket])

  return usersCount
}

export default useUsersOnlineCount
