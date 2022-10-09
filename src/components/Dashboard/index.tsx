import { Button } from '@mui/material'
import useDashboard from './useDashboard'

const Dashboard = () => {
  const { handleLogout } = useDashboard()
  return (
    <>
      <Button variant='contained' onClick={handleLogout}>
        Logout
      </Button>
      <h1>dashboard</h1>
    </>
  )
}

export default Dashboard
