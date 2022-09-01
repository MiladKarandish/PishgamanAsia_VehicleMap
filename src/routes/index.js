import About from 'pages/About'
import Home from 'pages/Home'
import Login from 'pages/Login'
import { Routes, Route } from 'react-router-dom'

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default index
