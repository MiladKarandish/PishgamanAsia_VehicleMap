import { useLocation } from 'react-router-dom'
import 'styles/footer.scss'

const Footer = () => {
  const location = useLocation()

  return (
    <div
      className='footer'
      style={{ display: location.pathname === '/map' ? 'none' : 'flex' }}>
      <span>تمامی چیز میز های این وبسایت متعلق به یک شخص می باشد &copy;</span>
    </div>
  )
}

export default Footer
