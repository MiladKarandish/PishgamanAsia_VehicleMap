import { Link } from 'react-router-dom'
import 'styles/header.scss'

const Header = () => {
  return (
    <div className='header'>
      <Link to={'/login'}>ورود</Link>
      <Link to={'/'}>خانه</Link>
    </div>
  )
}

export default Header
