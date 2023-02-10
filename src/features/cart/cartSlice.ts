import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export type Product = {
    id: string,
    title: string,
    price: number,
    description:string,
    image:string
}

type CartItems = { 
    product: Product,
    quantity: number
}

export interface CartState {
    items: CartItems[]
    cartOpen: boolean
}

  export const getLocalCart = (): CartItems[] =>{


    const localCartItemsArray = window.localStorage.getItem('cartItems');
    if(localCartItemsArray){
        return JSON.parse(localCartItemsArray) as CartItems[]
    }

    return []
}
  
  const initialState: CartState = {
    items: getLocalCart(),
    cartOpen:true
  }

  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItem: (state, action: PayloadAction<Product>) => {
        const existingProduct = state.items.find((existing)=>existing.product.id === action.payload.id)

        if(existingProduct){
            existingProduct.quantity++;
        }
        else{
            state.items.push({product:action.payload, quantity:1})
        }

        window.localStorage.setItem('cartItems', JSON.stringify(state.items))

      },
      removeItem: (state, action: PayloadAction<Product>) => {
        const existingProduct = state.items.find((existing)=>existing.product.id === action.payload.id)

        if(existingProduct){
            
            const newState = state.items.filter((existing)=> existing.product.id !== action.payload.id)
            state.items = newState;
            window.localStorage.setItem('cartItems', JSON.stringify(state.items))

        }
        else{
            return;
        }
      },
      decreaseItem: (state, action: PayloadAction<Product>) => {
        const existingProduct = state.items.find((existing)=>existing.product.id === action.payload.id)

        if(existingProduct){
            
            if(existingProduct.quantity>1){
                existingProduct.quantity--;
            }
            else{
                const newState = state.items.filter((existing)=> existing.product.id !== action.payload.id)
                state.items = newState
            }

            window.localStorage.setItem('cartItems', JSON.stringify(state.items))

        }
        else{
            return;
        }
      },
      toogleCartOpen: (state)=>{
        state.cartOpen = !state.cartOpen
      }
    },
  })

export const { addItem, removeItem, decreaseItem, toogleCartOpen } = cartSlice.actions

export default cartSlice.reducer