import { EmptyCart } from "../EmpetyCart/EmptyCart"
import { FullCart } from "../FullCart/FullCart"


export const Cart = ({ cart, addCart, amountCart, removeProductCart }) => {

    return (
        cart.length ? <FullCart cart={cart} addCart={addCart} amountCart={amountCart} removeProductCart={removeProductCart} /> : <EmptyCart />
    )

}