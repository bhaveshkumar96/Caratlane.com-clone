import React from 'react'
import {Routes , Route} from "react-router-dom"
import Home from '../Components/Home'
import Cart from "../Pages/Cart"
import Checkout from "../Pages/Checkout"
import Login from "../Pages/Login"
import SignUp from "../Pages/SignUp"
import Payment from "../Pages/Payment"
import ProductPage from "../Pages/ProductPage"
import SingleProduct from "../Pages/SingleProduct"


const MainRoute = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/product/:id" element={<SingleProduct/>} />


        </Routes>
    </div>
  )
}

export default MainRoute