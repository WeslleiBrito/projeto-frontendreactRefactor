import { Text, Item, Quantity, Modify, Amount, ButtonRemove, ButtonAdd, ButtonReduce, Description, QuantitySection, Photograph } from "./itemStyle"
import { coinBrl } from "../../ProductList/Home/Home"
import { useEffect, useState } from "react"

export const Items = (props) => {

    const { nameProduct, quantity, amount, id, addCart, removeProductCart, photograph } = props
    const [inputQuantity, setInputQuantity] = useState(quantity)


    const handleInputQuantity = (event, value) => {
        if (!value) {
            if (Number(event.target.value) > 0) {
                setInputQuantity(Number(event.target.value))
                addCart(event, Number(event.target.value))
            } else {
                setInputQuantity("")
                addCart(event, "")
            }

        } else {
            if (quantity + value >= 1) {
                setInputQuantity(quantity + value)
                addCart(event, quantity + value)
            } else {
                setInputQuantity(1)
                addCart(event, 1)
            }
        }

    }

    useEffect(() => { setInputQuantity(quantity) }, [quantity])

    return (
            <Item>
                    <Photograph src={photograph}/>
                    <Description>
                        <Text>{nameProduct.length >= 40 ? nameProduct.toUpperCase().slice(0, 39) : nameProduct.toUpperCase().slice(0, nameProduct.length - 1)}</Text>
                        <Modify>
                            <QuantitySection>
                                <ButtonAdd id={id} handleInputQuantity={handleInputQuantity} />
                                <Quantity type={'number'} value={inputQuantity} onChange={handleInputQuantity} id={id} min={1} />
                                <ButtonReduce id={id} handleInputQuantity={handleInputQuantity} />
                                <ButtonRemove id={id} removeProductCart={removeProductCart} />
                            </QuantitySection>
                            
                            <Amount>{coinBrl(amount)}</Amount>
                            
                        </Modify>
                        
                    </Description>
          
                

            </Item>
    )
}