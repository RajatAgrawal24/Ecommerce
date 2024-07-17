import './App.css'
import React, { useEffect, useState } from 'react'
import {Routes,Route, useLocation} from "react-router-dom"
import Header from './component/layout/Header'
import Home from './component/Home'
import Footer from './component/layout/Footer'
import ProductDetail from './component/product/ProductDetail'
import Cart from './component/cart/Cart'
import Login from './component/user/Login'
import Register from './component/user/Register'
import Dashboard from './component/admin/Dashboard'
import Contact from './component/Contact'
import Profile from './component/user/Profile'
import { useDispatch } from 'react-redux'
import { loadUser } from './redux/actions/UserAction'
import Shipping from './component/cart/Shipping'
import CheckoutStep from './component/cart/CheckoutStep'
import ConfirmOrder from './component/cart/ConfirmOrder'
import Payment from './component/payment/Payment'
import axios from 'axios'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Success from './component/payment/Success'
import MyOrder from './component/order/MyOrder'
import OrderDetails from './component/order/OrderDetails'

function App() {
  const dispatch = useDispatch()

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get('/api/stripeapiKey');
    setStripeApiKey(data.stripeApiKey);
  }

  // console.log(stripeApiKey)

  useEffect(() => {
    dispatch(loadUser())
    getStripeApiKey()
  }, [dispatch])
  
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='productDetail/:id' element={<ProductDetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shipping' element={<Shipping/>}/>
      <Route path='/checkoutStep' element={<CheckoutStep/>}/>
      <Route path='/order/confirm' element={<ConfirmOrder/>}/>
      {
        stripeApiKey && (
          <Route path="/payment" element={
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Payment/>
            </Elements>
          }
          />
        )
      }
      <Route path='/success' element={<Success/>}/>
      <Route path='/orders/me' element={<MyOrder/>}/>
      <Route path='/orderDetails' element={<OrderDetails/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App