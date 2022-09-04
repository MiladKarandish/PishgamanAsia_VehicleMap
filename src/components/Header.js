import { useEffect, useState, useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import 'styles/header.scss'
import Logo from 'assets/logo/logo.png'
import UserContext from 'contexts/UserContext'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { userData, setUserData } = useContext(UserContext)
  const [active, setActive] = useState('/')

  const logOut = () => {
    localStorage.removeItem('userData')
    setUserData(null)
  }

  useEffect(() => {
    setActive(location.pathname)
  }, [location.pathname])

  return (
    <>
      <div
        className='header'
        style={{ display: active === '/map' ? 'none' : 'flex' }}>
        <div className='header__menu_items'>
          {!userData ? (
            <Link to={'/login'}>ورود</Link>
          ) : (
            <Link to={'/'} onClick={() => logOut()}>
              خروج
            </Link>
          )}
          <Link to={'/about'} className={active === '/about' ? 'active' : ''}>
            درباره ما
          </Link>
          <Link
            to={'/contact'}
            className={active === '/contact' ? 'active' : ''}>
            ارتباط با ما
          </Link>
        </div>
        <img
          className='logo'
          src={Logo}
          alt='Logo'
          onClick={() => navigate('/')}
        />
      </div>

      <HamburgerMenu active={active} navigate={navigate} />
    </>
  )
}

export default Header
