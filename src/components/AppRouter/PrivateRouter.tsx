import { useAuth } from '../../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const {signed} = useAuth()

  return signed ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRouter