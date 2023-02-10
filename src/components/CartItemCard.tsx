import React from 'react'
import { Product } from '../features/cart/cartSlice'
import { useCart } from '../utils/useCart'

type Props = {
    product:Product
    quantity: number
}

function CartItemCard({product,quantity}: Props) {


    const {decreaseQantity,increaseQantity} = useCart();

  return (
    <div className='flex p-2 w-full justify-between items-center gap-2 bg-slate-200 rounded-xl text-black'>
        <div className='w-full flex items-center gap-4 '>
            <img src={product.image} className="w-full max-w-[40px] h-[40px] object-cover"/>
            <div className='w-full flex gap-5 justify-between items-center text-sm'>
                <div className='max-w-[150px] truncate '>
                    <span className=''>{product.title}</span>
                </div>
                <p>${product.price}</p>
                <p>x{quantity}</p>
            </div>
        </div>
        <div className='ml-2 flex text-lg gap-1'>
            <button className='p-1 bg-slate-300 rounded-md hover:bg-slate-400' onClick={()=>decreaseQantity(product)}>-</button>
            <button className='p-1 bg-slate-300 rounded-md hover:bg-slate-400' onClick={()=>increaseQantity(product)}>+</button>
        </div>
    </div>
  )
}

export default CartItemCard