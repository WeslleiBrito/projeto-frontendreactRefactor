import { Items } from "../Items/Items"
import { Title, List } from "../FullCart/styleFullCart"


export const FullCart = ({ cart, addCart, removeProductCart }) => {

    return (
        <>
            <Title>Carrinho</Title>

            <List>
                {cart.map((product) => <Items key={product.id} quantity={product.quantity} nameProduct={product.name} unitaryValue={product.value} amount={product.amount} id={product.id} addCart={addCart} removeProductCart={removeProductCart} />)}
            </List>
        </>

    )
}
