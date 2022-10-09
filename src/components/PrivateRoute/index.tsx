import { navigate } from 'gatsby'
import { isBrowser, isLoggedIn } from 'services/auth'

const PrivateRoute = ({ component: Component, path, ...rest }: any) => {
  if (!isLoggedIn() && isBrowser() && path !== '/login' && path !== '/register') {
    navigate('/login')
    return null
  }

  if (isLoggedIn() && isBrowser() && (path === '/login' || path === '/register')) {
    navigate('/')
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
