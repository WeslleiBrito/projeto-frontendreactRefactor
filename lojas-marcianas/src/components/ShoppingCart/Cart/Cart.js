import { Items } from "../Items/Items"
import { Title, Text, ContainerCart } from "./cartStyle"


export const Cart = () => {
    return (
        <ContainerCart>
            <Title>Carrinho</Title>
            <Items quantity={2} nameProduct={"x Produto 1"} />
            <Items quantity={2} nameProduct={"x Produto 2"} />
            <Text>Valor total: R$</Text>
        </ContainerCart>
    )
}