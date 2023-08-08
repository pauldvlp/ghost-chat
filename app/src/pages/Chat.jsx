import ChatForm from '../components/ChatForm'
import ChatHeader from '../components/ChatHeader'
import ChatLogs from '../components/ChatLogs'
import ChatMessages from '../components/ChatMessagesContainer'
import { ChatProvider } from '../context/contextChat'
import useIsMobile from '../hooks/useIsMobile'

const Chat = () => {
  const isMobile = useIsMobile()

  return (
    <main className="Chat grid max-h-screen h-screen mx-auto max-w-6xl sm:border-r-2 sm:border-l-2 border-indigo-300">
      <ChatProvider>
        <ChatHeader />
        <ChatMessages />
        <ChatForm />
      </ChatProvider>
      {isMobile && <ChatLogs />}
    </main>
  )
}

export default Chat
