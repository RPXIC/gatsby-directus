import type { HeadFC } from 'gatsby'
import { Layout, Login, PrivateRoute } from 'components'

const LoginPage = ({ location }: any) => (
  <Layout>
    <PrivateRoute path={location.pathname} component={Login} />
  </Layout>
)

export default LoginPage

export const Head: HeadFC = () => <title>Login</title>
