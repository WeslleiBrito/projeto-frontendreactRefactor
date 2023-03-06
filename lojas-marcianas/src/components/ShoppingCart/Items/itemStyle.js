import styled from "styled-components";
import { HiTrash } from "react-icons/hi"

export const Text = styled.p`
    
`
export const ButtonRemove = styled.button`

`
export const Item = styled.li`
    display: flex;
    flex-direction: column;
`

export const Quantity = styled.input`
    text-align: center;
    width: 3vw;
`

export const Modify = styled.section`
`

export const Values = styled.section`
    display: flex;
    justify-content: space-around;
` 

export const ValueUnitProduct = styled.h5`
`

export const Amount = styled.h5`
`
export const Trash = (props) => {
    return (
            <HiTrash
                style=
                {
                    {
                        width: "4vh",
                        height: "4vh", 
                        color: "red", 
                    }
                }
                id={props.idItem}
                onClick={props.onClickfindItemProductStock}
            />
    )
}
