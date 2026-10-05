import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className='group relative'>
      <Link to={`/products/${product?.id}`}>
      <div className='relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-800/50 lg:aspect-none lg:h-80 h-96 border border-gray-700/50'>
        <img
          src={product?.image}
          alt={product?.name}
          className='h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110'
        />
        {/* Light-grey mask sliding from top to bottom on hover */}
        <div className='absolute inset-0 bg-gray-300/40 origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100 pointer-events-none' />
      </div>
      </Link>
      <div className='mt-4 flex justify-between'>
        <div>
            <h3 className='text-sm text-foreground'>
                <Link to={`/products/${product?.id}`}>
                <span aria-hidden="true" className='inset-0'>{product?.name}</span>
                </Link>
            </h3>
        </div>
        <p className='text-sm font-medium text-foreground'>${product?.new_price}</p>
      </div>
    </div>
  )
}

export default Item
