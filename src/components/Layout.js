import Header from './Header'
import Footer from './Footer'
import Routes from 'routes/index'
import 'styles/layout.scss'

const Layout = () => {
  return (
    <div className='layout__container'>
      <Header />
      <Routes />
      <Footer />
    </div>
  )
}

export default Layout
