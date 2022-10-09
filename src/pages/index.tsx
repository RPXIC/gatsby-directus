import type { HeadFC } from 'gatsby'
import { Dashboard, Layout, PrivateRoute } from 'components'

const IndexPage = ({ location }: any) => (
  <Layout>
    <PrivateRoute path={location.pathname} component={Dashboard} />
  </Layout>
)

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
