import React from 'react'
import { BsFillCartFill } from 'react-icons/bs';
import { useCart } from '../utils/useCart';


type Props = {}

function Navigation({}: Props) {

    const {cart,toogleCart} = useCart();


  return (
    <div>
        <div className='container'>
            <div className='flex justify-between py-4'>
                <div>
                    This is logo.
                </div>
                <div className='flex items-center gap-2 p-2 bg-slate-200 rounded-xl hover:bg-slate-300 cursor-pointer' onClick={toogleCart}>
                    <BsFillCartFill className='w-[24px] h-[24px]'/>
                    <span>{cart.items.length}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation