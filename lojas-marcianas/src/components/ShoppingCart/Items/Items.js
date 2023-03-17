import { Text, Item, Quantity, Modify, Values, ValueUnitProduct, Amount, ButtonRemove, ButtonAdd, ButtonReduce, QuantitySection } from "./itemStyle"
import { coinBrl } from "../../ProductList/Home/Home"
import { useEffect, useState } from "react"

export const Items = (props) => {

    const { nameProduct, quantity, unitaryValue, amount, id, addCart, removeProductCart } = props
    const [inputQuantity, setInputQuantity] = useState(quantity)

    const onClickSetQuantity = (event, value) => {
        
        if(!value){
            setInputQuantity(Number(event.target.value))
            addCart(event, Number(event.target.value))
        }else{

            if(quantity + value >= 1 || quantity === ""){
                if(quantity){
                    setInputQuantity(event, value + quantity)
                    addCart(event, value + quantity)
                }else{
                    setInputQuantity(event, 1)
                    addCart(event, 1)
                }
                
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
                        <ButtonAdd id={id} onClickSetQuantity={onClickSetQuantity}/>
                        <Quantity type={'number'} value={inputQuantity} onChange={onClickSetQuantity} id={id} min={1} />
                        <ButtonReduce id={id} onClickSetQuantity={onClickSetQuantity}/>
                    </QuantitySection>
                    <ButtonRemove id={id} removeProductCart={removeProductCart} />
                </Modify>

            </Item>
        </>
    )
}