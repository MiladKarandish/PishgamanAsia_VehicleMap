import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const isAuth = JSON.parse(localStorage.getItem('userData'))?.userToken
    ? true
    : false

  return isAuth ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes
