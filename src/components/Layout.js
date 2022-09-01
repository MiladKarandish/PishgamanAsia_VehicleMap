import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Routes from 'routes/index'
import 'styles/layout.scss'

const Layout = () => {
  return (
    <div className='layout__container'>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  )
}

export default Layout
