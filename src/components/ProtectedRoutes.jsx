import { Navigate, Outlet } from 'react-router-dom';
  
const ProtectedRoutes = () => {
  
  if(false){
    return <Outlet />
  } else { 
    return <Navigate to='/' />
  }
}
  
export default ProtectedRoutes;