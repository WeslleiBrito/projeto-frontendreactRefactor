import { Items } from "../Items/Items"
import { List } from "../FullCart/styleFullCart"


export const FullCart = ({ cart, addCart, removeProductCart }) => {

    return (
        <>
            <List>
                {cart.map((product) => <Items key={product.id} quantity={product.quantity} nameProduct={product.name} amount={product.amount} id={product.id} addCart={addCart} removeProductCart={removeProductCart} photograph={product.images[0]}/>)}
            </List>
        </>

    )
}
