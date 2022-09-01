import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Routes from 'routes/index'
import 'styles/layout.scss'
import { UserContextProvider } from 'contexts/UserContext'

const Layout = () => {
  return (
    <div className='layout__container'>
      <Router>
        <UserContextProvider>
          <Header />
          <Routes />
          <Footer />
        </UserContextProvider>
      </Router>
    </div>
  )
}

export default Layout
