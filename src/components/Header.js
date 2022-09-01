import { useEffect, useState, useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import 'styles/header.scss'
import Logo from 'assets/logo/logo.png'
import UserContext from 'contexts/UserContext'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { userData, setUserData } = useContext(UserContext)
  const [active, setActive] = useState('/')

  console.log(userData)

  const logOut = () => {
    localStorage.removeItem('userData')
    setUserData(null)
  }

  useEffect(() => {
    setActive(location.pathname)
  }, [location.pathname])

  return (
    <div className='header'>
      {console.log(userData)}
      {!userData ? (
        <Link to={'/login'} className={active === '/login' ? 'active' : ''}>
          ورود
        </Link>
      ) : (
        <Link
          to={'/'}
          className={active === '/' ? 'active' : ''}
          onClick={() => logOut()}>
          خروج
        </Link>
      )}
      <Link to={'/about'} className={active === '/about' ? 'active' : ''}>
        درباره ما
      </Link>
      <Link to={'/contact'} className={active === '/contact' ? 'active' : ''}>
        ارتباط با ما
      </Link>
      <img
        className='logo'
        src={Logo}
        alt='Logo'
        onClick={() => navigate('/')}
      />
    </div>
  )
}

export default Header
