import { HeadFC } from 'gatsby'
import { Register, Layout, PrivateRoute } from 'components'

const RegisterPage = ({ location }: any) => (
  <Layout>
    <PrivateRoute path={location.pathname} component={Register} />
  </Layout>
)

export default RegisterPage

export const Head: HeadFC = () => <title>Register</title>
