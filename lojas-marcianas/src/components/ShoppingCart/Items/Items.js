import { Text, ButtonRemove, Item } from "./itemStyle"

export const Items = (props) => {
    return (
        <>
            <Item>
                <Text>{props.quantity}</Text>
                <Text>{props.nameProduct}</Text>
                <ButtonRemove onClick={props.remove}>Remover</ButtonRemove>
            </Item>
        </>
    )
}