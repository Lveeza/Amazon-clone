import React, { useState } from 'react'
import amazonLogo from '../assets/amazon.png'
import { useSearch } from '../context/SearchContext'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { cart } = useCart()

  const { search, setSearch } = useSearch()
  const { setCategory } = useSearch()
  const { user } = useAuth()

  return (
    <>
      <header className="relative flex justify-center bg-[#2f662f] text-white">
        {/* Top Row */}
        <div className="flex w-full items-center gap-3 px-3 py-2 md:w-[100%]">
          {/* Hamburger (after sm) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl sm:flex md:hidden"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Logo */}
          <img
            src={amazonLogo}
            alt="Amazon-logo"
            className="h-9 cursor-pointer object-contain md:h-14"
          />

          {/* Search */}
          <div className="max-w-8xl flex flex-1">
            <div
              className="hidden cursor-pointer items-center rounded-l-md bg-gray-300 px-3 text-black sm:flex"
              onClick={() => setSearch('')}
            >
              All
            </div>
            <input
              type="text"
              placeholder="Search Amazon"
              value={search}
              className="flex-1 px-3 py-2 text-xs text-black focus:outline-none sm:text-base"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="cursor-pointer rounded-r-md bg-pink-700 px-4">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          {/* Cart */}
          <Link
            className="flex cursor-pointer items-center gap-1 font-semibold"
            to="/home/cart"
          >
            <span className="hidden text-xs sm:flex sm:text-base">Cart</span>
            <i className="fa-solid fa-cart-shopping text-lg sm:text-xl"></i>
            <p className="relative bottom-4 right-3 h-4 w-4 rounded-full bg-white text-center text-xs text-green-700">
              {cart.length}
            </p>
          </Link>
        </div>

        {/* Dropdown Menu (after sm click) */}
        <div
          className={`fixed left-0 top-0 z-50 h-full w-64 transform bg-[#2f662f] transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} `}
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-xl text-white"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Menu content */}
          <div className="mt-4 space-y-5 px-4">
            <div className="flex gap-2">
              <i className="fa-solid fa-location-dot mt-1"></i>
              <div>
                <p className="text-xs">Deliver to</p>
                <h3 className="font-semibold">Pakistan</h3>
              </div>
            </div>

            {/* Language */}
            <select className="w-full border border-white/30 bg-transparent px-2 py-1 outline-none">
              <option>EN</option>
              <option>ES</option>
              <option>AR</option>
              <option>DE</option>
              <option>HE</option>
              <option>KO</option>
              <option>PT</option>
            </select>

            {/* Sign in */}
            <div className="cursor-pointer">
              <p className="text-xs">Hello</p>
              <h3 className="font-semibold">{user ? user.email : 'Guest'}</h3>
            </div>

            {/* Orders */}
            <Link className="cursor-pointer" to={'/home/cart'}>
              <p className="mt-5 text-xs">Returns</p>
              <h3 className="font-semibold">& Orders</h3>
            </Link>
          </div>
        </div>

        {/* Desktop View (md and above) */}
        <div className="hidden items-center gap-2 whitespace-nowrap px-3 pb-2 md:flex lg:gap-5">
          <div className="flex gap-2">
            <i className="fa-solid fa-location-dot mt-1"></i>
            <div>
              <p className="text-[10px] lg:text-xs">Deliver to</p>
              <h3 className="text-sm font-semibold lg:text-base">Pakistan</h3>
            </div>
          </div>

          <select className="text bg-transparent text-sm outline-none lg:text-base">
            <option>EN</option>
            <option>ES</option>
            <option>AR</option>
            <option>DE</option>
            <option>HE</option>
            <option>KO</option>
            <option>PT</option>
          </select>

          <div className="cursor-pointer">
            <p className="text-[10px] lg:text-xs">Hello</p>

            <h3 className="text-sm font-semibold lg:text-base">
              {user ? user.email : 'Guest'}
            </h3>
          </div>

          <Link className="cursor-pointer" to={'/home/cart'}>
            <p className="text-[10px] lg:text-xs">Returns</p>
            <h3 className="text-sm font-semibold lg:text-base">& Orders</h3>
          </Link>
        </div>
      </header>

      <div className="bg-[#0f5f53] text-sm text-white">
        <div className="flex max-w-7xl items-center gap-3 overflow-x-auto px-2 py-2 text-xs sm:gap-5 sm:px-4 sm:text-base">
          <div
            className="flex cursor-pointer items-center gap-1 font-semibold"
            onClick={() => {
              setCategory('')
              setSearch('')
            }}
          >
            All
          </div>

          <span
            className="cursor-pointer whitespace-nowrap"
            onClick={() => setCategory("men's clothing")}
          >
            Men's clothing
          </span>

          <span
            className="cursor-pointer whitespace-nowrap"
            onClick={() => setCategory('jewelery')}
          >
            Jewelery
          </span>

          <span
            className="cursor-pointer whitespace-nowrap"
            onClick={() => setCategory('electronics')}
          >
            Electronics
          </span>

          <span
            className="cursor-pointer whitespace-nowrap"
            onClick={() => setCategory("women's clothing")}
          >
            Women's clothing
          </span>
        </div>
      </div>
    </>
  )
}
