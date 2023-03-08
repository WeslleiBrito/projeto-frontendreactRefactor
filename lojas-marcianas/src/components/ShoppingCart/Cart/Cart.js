import { Items } from "../Items/Items"
import { Title, Text, ContainerCart, List } from "./cartStyle"


export const Cart = ({ cart, onClickAddCart }) => {
    return (
        <ContainerCart>
            <Title>Carrinho</Title>

            <List>
                {cart.map((product, index) => <Items key={product.id} quantity={product.quantity} nameProduct={product.name} unitaryValue={product.value} amount={product.amount} id={index} onClickAddCart={onClickAddCart} />)}
            </List>

            <Text>Valor total: R$</Text>
        </ContainerCart>
    )
}