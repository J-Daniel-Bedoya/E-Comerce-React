import { Navigate, Outlet } from 'react-router-dom';
  
const ProtectedRoutes = () => {
  
  if(true){
    return <Outlet />
  } else { 
    return <Navigate to='/' />
  }
}
  
export default ProtectedRoutes;