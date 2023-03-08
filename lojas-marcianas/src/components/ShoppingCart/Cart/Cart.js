import { Items } from "../Items/Items"
import { Title, Text, ContainerCart, List } from "./cartStyle"


export const Cart = ({ cart, addCart }) => {
    return (
        <ContainerCart>
            <Title>Carrinho</Title>

            <List>
                {cart.map((product) => <Items key={product.id} quantity={product.quantity} nameProduct={product.name} unitaryValue={product.value} amount={product.amount} id={product.id} addCart={addCart} />)}
            </List>

            <Text>Valor total: R$</Text>
        </ContainerCart>
    )
}