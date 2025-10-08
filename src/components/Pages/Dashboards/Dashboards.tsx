import { Link } from 'react-router'
import BaseTemplate from '../../Templates/Base/Base'

const Dashboards = () => (
  <BaseTemplate>
    <p>Dashboards</p>
    <a href='/'>home</a>
    <Link to='/overdued'>Overdued</Link>
  </BaseTemplate>
)

export default Dashboards
