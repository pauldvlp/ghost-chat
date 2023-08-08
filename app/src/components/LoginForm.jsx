import { useContext, useState } from 'react'
import { Link } from 'wouter'
import LoginContext from '../context/contextLogin'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const { error, handleLogIn } = useContext(LoginContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogIn({ username })
  }

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  return (
    <form
      className="h-screen flex flex-col items-center justify-center p-4 gap-4 sm:border-2 sm:h-auto sm:max-w-md sm:rounded-lg sm:shadow-lg"
      onSubmit={handleSubmit}
    >
      <article className="mb-2">
        <p className="mb-4">
          Bienvenido a <strong className='text-indigo-600'><Link to='/'>Ghost Chat</Link></strong>, puedes chatear con mucha
          gente de todo el mundo en tiempo real.
        </p>

        <p>
          Bienvenido a Ghost Chat, puedes chatear con mucha gente de todo el
          mundo en tiempo real. Solo tienes que iniciar sesión con un nombre de
          usuario secreto 🤫 y divertirte chateando sobre lo que quieras.
        </p>
      </article>
      <footer className="flex gap-4">
        <label className="w-full">
          <input
            className="border-2 text-center text-xl rounded-md p-4 w-full focus:ring-indigo-200 focus:ring-4 focus:ring-offset-0 focus:outline-none hover:shadow-lg duration-300"
            type="text"
            placeholder="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <button className="button" type="submit">
          Chateemos
        </button>
      </footer>
      {error && (
        <span className="w-full text-red-600 text-sm font-semibold">
          {error}
        </span>
      )}
    </form>
  )
}

export default LoginForm
