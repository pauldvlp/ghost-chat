import { useContext } from 'react'
import { Redirect } from 'wouter'
import LoginContext from '../context/contextLogin'

const ChatHeader = () => {
  const { username, handleLogOut, isLogged } = useContext(LoginContext)

  if (!isLogged) return <Redirect to="/login" />

  return (
    <header className="[grid-area:header] flex justify-between items-center p-4 border-b-2 border-indigo-300">
      <h1 className="sm:text-xl">
        <span className="font-semibold">{username}</span>, chatea
        libremente.
      </h1>
      <button className="button" onClick={handleLogOut}>
        Salir
      </button>
    </header>
  )
}

export default ChatHeader
