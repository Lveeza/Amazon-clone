import Card from './Card'

export default function CardContainer({ filteredProducts }) {
  return (
    <div className="relative top-28 py-6 sm:top-40 md:top-60">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((item) => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
