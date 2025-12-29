import React from 'react'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, setCart } = useCart()

  const handleDelete = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const handleQtyChange = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty:
                type === 'increase' ? item.qty + 1 : Math.max(item.qty - 1, 1),
            }
          : item,
      ),
    )
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="mx-auto mt-5 max-w-4xl p-4">
      <span
            onClick={() => history.back()}
            className="mb-4 inline-block cursor-pointer text-sm text-blue-600"
          >
            ← Back
          </span>
      <h1 className="mb-10 text-2xl">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your Cart is empty</p>
      ) : (
        <div className="space-y-6">
          
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-b-gray-300 pb-4"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="mr-4 h-28 w-28 object-contain md:h-40 md:w-40"
              />

              {/* Title and Details */}
              <div className="flex-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  ${item.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">
                  Color: {item.color || 'General'}
                </p>

                {/* Quantity controls */}
                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => handleQtyChange(item.id, 'decrease')}
                    className="rounded border px-2 py-1 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => handleQtyChange(item.id, 'increase')}
                    className="rounded border px-2 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="mt-2 text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>

              {/* Price on the right */}

              <div className="ml-4 font-semibold">
                ${(item.price * item.qty).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Total */}
      {cart.length > 0 && (
        <div className="mt-6 text-right text-lg">
          Subtotal ({cart.length} {cart.length > 1 ? 'items' : 'item'}): $
          {total.toFixed(2)}
        </div>
      )}
    </div>
  )
}
