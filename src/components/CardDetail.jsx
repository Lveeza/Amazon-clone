import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CardDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [color, setColor] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [showBuyMessage, setShowBuyMessage] = useState(false)
  const { setCart } = useCart()

  useEffect(() => {
    ;(async () => {
      await fetchProducts()
    })()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`,
      )
      setProduct(response.data)
    } catch (error) {
      console.error(error.message)
    }
  }

  function onAddToCart(product) {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id)
      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: (item.qty || 1) + 1 } : item,
        )
      }
      return [...prevCart, { ...product, qty: 1 }]
    })
  }

  const handleAddToCart = () => {
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 1000)
  }

  const handleBuy = () => {
    setShowBuyMessage(true)
    setTimeout(() => setShowBuyMessage(false), 1000)
  }

  return (
    <>
      <div className="mx-auto mt-40 max-w-7xl px-4">
        {/* Back */}
        <span
          onClick={() => history.back()}
          className="mb-4 inline-block cursor-pointer text-sm text-blue-600"
        >
          ← Back
        </span>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* LEFT – Image */}
          <div className="md:col-span-1">
            <div
              className={`sticky top-20 rounded-md border p-4 ${color === 'gray' && 'bg-gray-300/50'} ${color === 'pink' && 'bg-pink-200/50'} ${color === 'blue' && 'bg-blue-200/50'}`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="md:h-[420px] h-[300px] w-full object-contain"
              />
            </div>
          </div>

          {/* CENTER – Details */}
          <div className="space-y-3 md:col-span-1">
            <h1 className="text-xl font-semibold">{product.title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="text-blue-600">(4,673)</span>
            </div>

            <hr />

            {/* Price */}
            <div>
              <p className="text-xl font-semibold text-red-600">
                ${product.price}
              </p>
              <p className="text-sm text-gray-600">
                + Shipping & Import Charges
              </p>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-700">
              {product.description}
            </p>

            <div>
              <h3 className="mb-2 text-sm font-semibold">Color:</h3>
              <div className="flex gap-2">
                <div
                  className="h-10 w-10 cursor-pointer rounded border bg-gray-300"
                  onClick={() => setColor('gray')}
                ></div>
                <div
                  className="h-10 w-10 cursor-pointer rounded border bg-pink-200"
                  onClick={() => setColor('pink')}
                ></div>
                <div
                  className="h-10 w-10 cursor-pointer rounded border bg-blue-200"
                  onClick={() => setColor('blue')}
                ></div>
              </div>
            </div>
          </div>

          {/* RIGHT – Buy Box */}
          <div className="md:col-span-1">
            <div className="space-y-3 rounded-md border bg-white p-4">
              <p className="text-xl font-semibold">${product.price}</p>

              <div className="flex gap-2 text-xs">
                <i className="fa-solid fa-location-dot mt-1"></i>
                <div>
                  <p className="text-blue-500">Deliver to</p>
                  <h3 className="text-blue-500">Pakistan</h3>
                </div>
              </div>

              <p className="text-sm font-medium text-green-600">In Stock</p>

              <select className="w-full rounded border p-2 text-sm">
                <option>Quantity: 1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>

              <div className="relative">
                <button
                  className="w-full rounded-full bg-yellow-400 py-2 font-semibold text-black hover:bg-yellow-500"
                  onClick={() => {
                    onAddToCart({
                      title: product.title,
                      id: product.id,
                      price: product.price,
                      image: product.image,
                    })
                    handleAddToCart()
                  }}
                >
                  Add to Cart
                </button>
                {showMessage && (
                  <p className="animate-slideUp absolute bottom-10 left-1/2 mb-5 -translate-x-1/2 transform rounded-lg bg-black/70 px-4 py-2 text-center text-xs text-white shadow-lg">
                    Item added successfully!
                  </p>
                )}
              </div>

              <div className="relative">
                <button
                  className="w-full rounded-full bg-orange-400 py-2 font-semibold text-black hover:bg-orange-500"
                  onClick={handleBuy}
                >
                  Buy Now
                </button>
                {showBuyMessage && (
                  <p className="animate-slideUp absolute bottom-10 left-1/2 mb-5 -translate-x-1/2 transform rounded-lg bg-black/70 px-4 py-2 text-center text-xs text-white shadow-lg">
                    Your order has been placed successfully!
                  </p>
                )}
              </div>

              <p className="text-xs text-gray-600">
                Ships from <span className="font-medium">Amazon</span>
                <br />
                Sold by <span className="text-blue-600">Amazon Store</span>
                <br />
                Returns Returnable
                <br />
                Packaging &nbsp;
                <span className="text-blue-600">
                   Ships in product packaging
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
