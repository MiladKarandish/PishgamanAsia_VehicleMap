import About from 'pages/About'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Map from 'pages/MapProvider'
import { Routes, Route } from 'react-router-dom'

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/map' element={<Map />} />
    </Routes>
  )
}

export default index
