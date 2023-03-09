import { Text, Item, Quantity, Modify, Values, ValueUnitProduct, Amount, Trash } from "./itemStyle"
import { coinBrl } from "../../ProductList/Home/Home"
import { useEffect, useState } from "react"

export const Items = (props) => {

    const { nameProduct, quantity, unitaryValue, amount, id, addCart, removeProductCart } = props
    const [inputQuantity, setInputQuantity] = useState(quantity)

    const onClickSetQuantity = (event) => {
        setInputQuantity(Number(event.target.value))
        addCart(event, Number(event.target.value))
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
                    <Quantity type={'number'} value={inputQuantity} onChange={onClickSetQuantity} id={id} min={1} />
                    <button id={id} onClick={removeProductCart}>
                        <Trash id={id} removeProductCart={removeProductCart} />
                    </button>

                </Modify>

            </Item>
        </>
    )
}