import { Text, ButtonRemove, Item, Quantity, Modify, Values, ValueUnitProduct, Amount, Trash } from "./itemStyle"
import { coinBrl } from "../../ProductList/Home/Home"
import { useEffect, useState } from "react"

export const Items = (props) => {

    const { nameProduct, quantity, unitaryValue, amount, id, onClickAddCart } = props
    const [inputQuantity, setInputQuantity] = useState(quantity)
    let indexName = ""

    const onClickSetQuantity = (event) => {
        setInputQuantity(Number(event.target.value))
        indexName = Number(event.target.name)
    }

    useEffect(() => {
        onClickAddCart(indexName, inputQuantity)
    }, [inputQuantity])

    return (
        <>
            <Item>
                <Text>{nameProduct}</Text>

                <Values>
                    <ValueUnitProduct>{coinBrl(unitaryValue)}</ValueUnitProduct>
                    <Amount>{coinBrl(amount)}</Amount>
                </Values>

                <Modify>
                    <Quantity type={'number'} value={inputQuantity} onChange={onClickSetQuantity} name={id} />
                    <Trash id={id} />
                </Modify>

            </Item>
        </>
    )
}