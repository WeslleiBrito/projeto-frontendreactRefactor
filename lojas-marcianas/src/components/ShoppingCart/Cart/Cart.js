import { EmptyCart } from "../EmptyCart/EmptyCart"
import { FullCart } from "../FullCart/FullCart"
import { ContainerCart, Text, Itens, Close, Title, HeaderCart } from "./cartStyle"
import { coinBrl } from "../../ProductList/Home/Home"

export const Cart = ({ cart, addCart, amountCart, removeProductCart, setShowCart }) => {

    return (
        <ContainerCart>

            <HeaderCart>
                <Title>Carrinho</Title>
                <Close setShowCart={setShowCart} />
            </HeaderCart>

            <Itens>
                {cart.length ? <FullCart cart={cart} addCart={addCart} amountCart={amountCart} removeProductCart={removeProductCart} /> : <EmptyCart />}
            </Itens>
            {cart.length ? <Text>Total compra: {coinBrl(amountCart)}</Text> : false}
        </ContainerCart>
    )

}