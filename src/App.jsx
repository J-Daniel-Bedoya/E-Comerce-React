import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import LoginUp from './components/LoginUp'
import NavBar from './components/NavBar'
import ProtectedRoutes from './components/ProtectedRoutes'
import SignUp from './components/SignUp'
import HomeStart from './pages/HomeStart'
import LoginUser from './pages/LoginUser'
import ProductsDetails from './pages/ProductsDetails'
import Purchases from './pages/Purchases'
import { getProductsThunk } from './store/slices/products.slice'
import './styles/App.css'

function App() {


  // jose me traje el getProductsThunk de homeStart a App que esa informacion de los productos las usemos en todos los componentes que sean necesarias, me explico si la hubiera dejalo solo en homeStar no me hubiera para ProductDetails, entonces lo coloque aca para que me sirviera de manera mas "global"
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsThunk());
  }, [])





  return (
    <HashRouter>
      <div className="App">
      
        <NavBar />


        <Routes>
          <Route path='/' element={<HomeStart />}/>
          <Route path='/login' element={<LoginUser />}/>
          <Route path='/login/SignUp' element={<SignUp />}/>
          <Route path='/login/LoginUp' element={<LoginUp />}/>

          <Route element={<ProtectedRoutes />}>
            <Route path='/product/:id' element={<ProductsDetails />}/>
            <Route path='/purchases' element={<Purchases />}/>
          </Route>
        </Routes>

        <Footer />
        
      </div>
    </HashRouter>
  )
}

export default App

// npm install bootswatch
// import 'bootswatch/dist/slate/bootstrap.min.css';
// npm install react-bootstrap
