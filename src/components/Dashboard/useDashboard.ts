import { navigate } from 'gatsby'
import { logout } from 'services/auth'

const useDashboard = () => {
  const handleLogout = () => {
    logout()
    navigate('/')
  }
  return {
    handleLogout
  }
}

export default useDashboard
