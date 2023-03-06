import { Text, ButtonRemove, Item, Quantity, Modify, Values, ValueUnitProduct, Amount, Trash } from "./itemStyle"
import { coinBrl } from "../../ProductList/Home/Home"
import { useState } from "react"

export const Items = (props) => {
    
    const {nameProduct, quantity, unitaryValue, amount, id} = props

    return (
        <>
            <Item>
                <Text>{nameProduct}</Text>

                <Values>
                    <ValueUnitProduct>{coinBrl(unitaryValue)}</ValueUnitProduct>
                    <Amount>{coinBrl(amount)}</Amount>
                </Values>

                <Modify>
                    <Quantity type={'number'} value={quantity} />
                    <Trash id={id}/>
                </Modify>
                
            </Item>
        </>
    )
}