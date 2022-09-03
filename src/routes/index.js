import About from 'pages/About'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Map from 'pages/MapProvider'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/map' element={<Map />} />
      </Route>
    </Routes>
  )
}

export default index
