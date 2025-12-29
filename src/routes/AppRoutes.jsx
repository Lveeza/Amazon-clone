import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import CardPage from '../pages/CardPage'
import CartPage from '../pages/CartPage'
import Login from '../pages/Login'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/home/cardDetail/:id" element={<CardPage />} />
        <Route path="home/cart" element={<CartPage />} />
      </Route>
    </Routes>
  )
}
