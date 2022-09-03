import { useLocation } from 'react-router-dom'
import 'styles/footer.scss'

const Footer = () => {
  const location = useLocation()

  return (
    <div
      className='footer'
      style={{ display: location.pathname === '/map' ? 'none' : 'flex' }}>
      <span>&copy; تمامی حقوق این وبسایت متعلق به پیشگامان میباشد</span>
    </div>
  )
}

export default Footer
