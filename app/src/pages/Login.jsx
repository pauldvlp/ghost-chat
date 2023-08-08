import { useContext } from 'react'
import { Redirect } from 'wouter'
import LoginForm from '../components/LoginForm'
import LoginContext from '../context/contextLogin'

const Login = () => {
  const { isLogged } = useContext(LoginContext)

  return (
    <section className='sm:grid sm:place-items-center h-screen'>
      {isLogged && <Redirect to="/chat" />}
      <LoginForm />
    </section>
  )
}

export default Login
