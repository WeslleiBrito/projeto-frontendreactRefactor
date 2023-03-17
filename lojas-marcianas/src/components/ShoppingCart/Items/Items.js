import { Text, Item, Quantity, Modify, Values, ValueUnitProduct, Amount, ButtonRemove, ButtonAdd, ButtonReduce, QuantitySection } from "./itemStyle"
import { coinBrl } from "../../ProductList/Home/Home"
import { useEffect, useState } from "react"

export const Items = (props) => {

    const { nameProduct, quantity, unitaryValue, amount, id, addCart, removeProductCart } = props
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
        <>
            <Item>
                <Text>{nameProduct}</Text>

                <Values>
                    <ValueUnitProduct>{coinBrl(unitaryValue)}</ValueUnitProduct>
                    <Amount>{coinBrl(amount)}</Amount>
                </Values>

                <Modify>
                    <QuantitySection>
                        <ButtonAdd id={id} handleInputQuantity={handleInputQuantity} />
                        <Quantity type={'number'} value={inputQuantity} onChange={handleInputQuantity} id={id} min={1} />
                        <ButtonReduce id={id} handleInputQuantity={handleInputQuantity} />
                    </QuantitySection>
                    <ButtonRemove id={id} removeProductCart={removeProductCart} />
                </Modify>

            </Item>
        </>
    )
}