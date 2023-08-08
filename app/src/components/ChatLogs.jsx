import useChatLogs from '../hooks/useChatLogs'
import useUsersOnlineCount from '../hooks/useUsersOnlineCount'

const ChatLogs = () => {
  const usersOnlineCount = useUsersOnlineCount()
  const chatLogs = useChatLogs()

  return (
    <section className='[grid-area:logs] p-4 border-l-2 border-indigo-300 overflow-y-auto'>
      <p>Usuarios Conectados: <strong>{usersOnlineCount}</strong></p>
      {chatLogs.map(log => <p className='text-sm' key={crypto.randomUUID()}>
        Usuario {log.status}: <strong>{log.username}</strong>
      </p>)}
    </section>
  )
}

export default ChatLogs
