import React from 'react'
import { useDispatch } from 'react-redux'
import { Product } from '../features/cart/cartSlice'
import {addItem} from '../features/cart/cartSlice'
import { useCart } from '../utils/useCart'

type Props = {
    product: Product
}

function ProductCard({product}: Props) {

    const dispatch = useDispatch()

    const {addProduct,removeProduct,isInCart} = useCart();


  return (
    <div key={product.id} className="flex flex-col w-full">
        <img
            src={product.image}
            alt={product.image}
            className="w-full rounded-lg aspect-square object-cover object-center"
        />
        <div>
            <h3 className="product-title truncate text-gray-700">
                {product.title}
            </h3>
            <p className="price-text font-medium text-gray-900">{'$' + product.price}</p>
        </div>
        <div className='my-2'>
            {!isInCart(product) ?
                <button className='button-primary w-full' onClick={()=>addProduct(product)}>Add to cart</button>
            :
                <button className='button-secundary w-full' onClick={()=>removeProduct(product)}>Remove from cart</button>        
            }
        </div>
    </div>
  )
}

export default ProductCard