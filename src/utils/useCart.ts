import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addItem, decreaseItem, Product, removeItem, toogleCartOpen } from "../features/cart/cartSlice";

export function useCart () {

    const dispatch = useDispatch();

    const cart = useSelector((state:RootState)=>state.cart)

    const total = cart.items.reduce((sum, curr)=>sum+=(curr.product.price * curr.quantity),0) 

    const isInCart = (product:Product) => {
        const existingProduct = cart.items.find((existing)=>existing.product.id === product.id)

        if(existingProduct){
            return true;
        }
        else{
            return false;
        }

    }

    const addProduct = (product: Product) =>{
        dispatch(addItem(product))
    }

    const removeProduct = (product: Product) =>{
        dispatch(removeItem(product))
    }

    const decreaseQantity = (product: Product) =>{
        dispatch(decreaseItem(product))
    }

    const increaseQantity = (product: Product) =>{
        dispatch(addItem(product))
    }

    const toogleCart = () => {
        dispatch(toogleCartOpen());
    }

    return {cart,total,addProduct,removeProduct,decreaseQantity, increaseQantity, isInCart, toogleCart}

}