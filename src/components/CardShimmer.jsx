import React from 'react'

export default function CardShimmer() {
  return (
    <div className="mt-52 flex flex-wrap mx-auto max-w-7xl items-center justify-center gap-5">
      {Array.from({ length: 20 }).map((el, i) => {
        return (
          <div
            key={i}
            className="h-[400px] w-full max-w-[300px] rounded-md bg-white p-4 shadow-xl transition-shadow duration-300 hover:shadow-lg"
          >
            <p className="mb-10 h-10 w-[250px] rounded-md bg-[#C7C7C7] md:h-10"></p>

            <div className="mb-3 flex h-56 w-full items-center justify-center rounded-md bg-[#C7C7C7]"></div>

            <p className="mt-5 h-5 w-28 rounded-md bg-[#C7C7C7]"></p>
          </div>
        )
      })}
    </div>
  )
}
