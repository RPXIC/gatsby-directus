import { Router } from '@reach/router'
import DashBoard from './index.tsx'
import LoginPage from './login'
import RegisterPage from './register'

const App = () => {
  return (
    <Router>
      <DashBoard path='/' />
      <LoginPage path='/login' />
      <RegisterPage path='/register' />
    </Router>
  )
}

export default App
