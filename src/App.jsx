import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import LoginUp from './components/LoginUp'
import NavBar from './components/NavBar'
import ProtectedRoutes from './components/ProtectedRoutes'
import ShoppingCart from './components/ShoppingCart'
import CreateAccount from './components/CreateAccount'
import HomeStart from './pages/HomeStart'
import LoginUser from './pages/LoginUser'
import ProductsDetails from './pages/ProductsDetails'
import Purchases from './pages/Purchases'
import { useSelector } from "react-redux";
import './styles/App.css'

function App() {
  const shooping = useSelector(state => state.shooping)
  return (
    <HashRouter>
      <div className="App">
      
        <NavBar />


        <Routes>
          <Route path='/' element={<HomeStart />}/>
          <Route path='/login' element={<LoginUser />}/>
          <Route path='/login/createAccount' element={<CreateAccount />}/>
          <Route path='/login/LoginUp' element={<LoginUp />}/>

          <Route element={<ProtectedRoutes />}>
            <Route path='/product/:id' element={<ProductsDetails />}/>
            <Route path='/purchases' element={<Purchases />}/>
          </Route>
        </Routes>
        {
          shooping && <ShoppingCart />
        }
        <div className='footer__app'>
          <Footer />
        </div>
        
      </div>
    </HashRouter>
  )
}

export default App

// npm install bootswatch
// import 'bootswatch/dist/slate/bootstrap.min.css';
// npm install react-bootstrap
