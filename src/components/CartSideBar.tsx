import React, { useState } from 'react'
import { useCart } from '../utils/useCart';
import { MdArrowBack } from 'react-icons/md';
import CartItemCard from './CartItemCard';


let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

type Props = {}

function CartSideBar({}: Props) {

    const [showSidebar, setShowSidebar] = useState(true);

    const {cart,toogleCart, total} = useCart();

    
  return (



  <>
      {
      <div className={`top-0 right-0 w-auto max-w-sm min-w-[24rem] bg-white shadow-lg text-black  py-2 px-4 text-white fixed h-full ease-in-out duration-300 ${cart.cartOpen ? "translate-x-0 " : "translate-x-full"}`}>
        <button className='absolute top-4 left-4' onClick={toogleCart}><MdArrowBack className='w-[24px] h-[24px]'/></button>
         <h2 className="mt-16 text-4xl font-semibold">Cart</h2>
         <div className='mt-8 flex flex-col gap-2'>
            {
                cart.items &&
                cart.items.map((items,i)=> <CartItemCard product={items.product} quantity={items.quantity}/>)
            }
         </div>
         <div>
            <span>Total: </span>
            <span>{USDollar.format(total)}</span>
         </div>
       </div>
      }
  </>


  )
}

export default CartSideBar