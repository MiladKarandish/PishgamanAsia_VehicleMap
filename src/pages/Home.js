import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from 'contexts/UserContext'
import 'styles/home.scss'

const Home = () => {
  const { userData } = useContext(UserContext)

  return (
    <div className='home'>
      <h1>وسیله نقلیه مورد نیازتان در هر زمان و مکان!</h1>
      <p>با پیشگامان دیگر به وسیله نقلیه شخصی نیازی ندارید</p>

      <Link to={userData ? '/map' : '/login'} className='home__request'>
        درخواست وسیله نقلیه
      </Link>
    </div>
  )
}

export default Home
