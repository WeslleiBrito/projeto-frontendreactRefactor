import { Items } from "../Items/Items"
import { Title, Text, ContainerCart, List } from "../FullCart/styleFullCart"
import { coinBrl } from "../../ProductList/Home/Home"

export const FullCart = ({ cart, addCart, amountCart, removeProductCart }) => {

    return (
        <ContainerCart>
            <Title>Carrinho</Title>

            <List>
                {cart.map((product) => <Items key={product.id} quantity={product.quantity} nameProduct={product.name} unitaryValue={product.value} amount={product.amount} id={product.id} addCart={addCart} removeProductCart={removeProductCart} />)}
            </List>
            <Text>Total compra: {coinBrl(amountCart)}</Text>
        </ContainerCart>

    )
}
