import { useEffect, useState } from 'react'
import carouselimg1 from '../assets/carouselimg1.jpg'
import carouselimg2 from '../assets/carouselimg2.jpg'
import carouselimg3 from '../assets/carouselimg3.jpg'
import carouselimg4 from '../assets/carouselimg4.jpg'

export default function Carousel() {
  const data = [carouselimg1, carouselimg2, carouselimg3, carouselimg4]

  const [index, setIndex] = useState(() => {
    return Number(localStorage.getItem('carouselIndex') || 0)
  })

  const [direction, setDirection] = useState('next')

  useEffect(() => {
    data.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('carouselIndex', index)
  }, [index])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleNext = () => {
    setDirection('next')
    setIndex((prev) => (prev + 1) % data.length)
  }

  const handlePrev = () => {
    setDirection('prev')
    setIndex((prev) => (prev - 1 + data.length) % data.length)
  }

  return (
    <div className="absolute left-1/2 h-fit w-full max-w-[1350px] -translate-x-1/2 transform overflow-hidden md:h-96">
      <div
        className={`flex transition-transform duration-500 ease-in-out`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {data.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className="w-full flex-shrink-0 object-contain object-top md:object-cover"
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 transform rounded-full p-2 text-5xl text-white"
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 transform rounded-full p-2 text-5xl text-white"
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  )
}
