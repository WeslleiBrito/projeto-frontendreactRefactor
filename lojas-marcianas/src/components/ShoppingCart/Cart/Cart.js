import { Items } from "../Items/Items"
import { Title, Text, ContainerCart, List } from "./cartStyle"
import { coinBrl } from "../../ProductList/Home/Home"
import { EmptyCart} from "../EmpetyCart/EmptyCart"


export const Cart = ({ cart, addCart, amountCart, removeProductCart }) => {
    
    if(cart.length){
        return (
            <ContainerCart>
                <Title>Carrinho</Title>
    
                <List>
                    {cart.map((product) => <Items key={product.id} quantity={product.quantity} nameProduct={product.name} unitaryValue={product.value} amount={product.amount} id={product.id} addCart={addCart} removeProductCart={removeProductCart} />)}
                </List> 
                <Text>Total compra: {coinBrl(amountCart)}</Text>
            </ContainerCart>
            
        )
    }else{
        return(
            <EmptyCart/>
        )
    }
   
}