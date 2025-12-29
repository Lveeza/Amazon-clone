import React, { useEffect, useState } from 'react'
import CardContainer from '../components/CardContainer'
import axios from 'axios'
import CardCarousel from '../components/Carousel'
import { useSearch } from '../context/SearchContext'
import CardShimmer from '../components/CardShimmer'

export default function Home() {
  const [products, setProducts] = useState([])
  const { search, category } = useSearch()

  useEffect(() => {
    ;(async () => {
      await fetchProducts()
    })()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      setProducts(response.data)
    } catch (error) {
      console.error(error.message)
    }
  }

  const filteredProducts = products.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category ? item.category === category : true

    return matchSearch && matchCategory
  })

  if(!products.length){
    return <CardShimmer/>
  }

  return (
    <div className="">
      <CardCarousel />
      <CardContainer filteredProducts={filteredProducts} />
    </div>
  )
}
