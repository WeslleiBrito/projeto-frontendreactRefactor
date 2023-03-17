import { EmptyCart } from "../EmpetyCart/EmptyCart"
import { FullCart } from "../FullCart/FullCart"
import { ContainerCart, Text, Itens } from "./cartStyle"
import { coinBrl } from "../../ProductList/Home/Home"

export const Cart = ({ cart, addCart, amountCart, removeProductCart }) => {

    return (
        <ContainerCart>
            <Itens>
                {cart.length ? <FullCart cart={cart} addCart={addCart} amountCart={amountCart} removeProductCart={removeProductCart} /> : <EmptyCart />}
            </Itens>
            {cart.length ? <Text>Total compra: {coinBrl(amountCart)}</Text> : false}
        </ContainerCart>
    )

}