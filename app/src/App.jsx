import { Route, Router } from 'wouter'
import { LoginProvider } from './context/contextLogin'
import Chat from './pages/Chat'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <LoginProvider>
        <Router>
          <Route path='/'>
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/chat">
            <Chat />
          </Route>
        </Router>
      </LoginProvider>
    </div>
  )
}

export default App
