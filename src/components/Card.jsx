import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ id, title, price, image }) {
  return (
    <div className="h-[350px] w-full max-w-[300px] rounded-md bg-white p-4 shadow-xl transition-shadow duration-300 hover:shadow-lg md:h-[400px] md:max-w-[400px]">
      <p className="h-16  cursor-pointer text-sm md:text-[15px] font-bold text-gray-800 md:h-24">
        {title}
      </p>

      <div className="mb-3 flex h-56 w-full items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-[150px] object-contain transition-transform duration-300 ease-in-out hover:scale-105 md:max-h-full"
        />
      </div>

      <p className="mt-5 cursor-pointer text-xs transition-all duration-300 hover:text-blue-500 md:mt-10">
      <Link to={`/home/cardDetail/${id}`}>See Detail</Link>
        <span className="ml-3">
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </p>
    </div>
  )
}
