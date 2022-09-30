import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomeStart from './pages/HomeStart'
import LoginUser from './pages/LoginUser'
import ProductsDetails from './pages/ProductsDetails'
import Purchases from './pages/Purchases'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
      
      
      <NavBar />


        <Routes>
          <Route path='/' element={<HomeStart />}/>
          <Route path='/login' element={<LoginUser />}/>
          <Route path='/products/:id' element={<ProductsDetails />}/>
          <Route path='/purchases' element={<Purchases />}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App

// npm install bootswatch
// import 'bootswatch/dist/slate/bootstrap.min.css';
// npm install react-bootstrap
