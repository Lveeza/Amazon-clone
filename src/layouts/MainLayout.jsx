import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import { SearchProvider } from '../context/SearchContext'
import { CartProvider } from '../context/CartContext'
import { AuthProvider } from '../context/AuthContext'

export default function MainLayout() {
  return (
    <AuthProvider>
      <CartProvider>
        <SearchProvider>
          <div className="font-nunito bg-gray-200/80">
            <Header />
            <main className="font-nunito">
              <Outlet />
            </main>
            <Footer />
          </div>
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  )
}
