import styled from "styled-components";
import trashIcon from "../../../assets/icons/trash.svg"
import reduce from "../../../assets/icons/reduce.svg"
import add from "../../../assets/icons/add.svg"



export const Text = styled.p`
    
`
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
`


export const Quantity = styled.input`
    text-align: center;
    width: 3vw;
    border-radius: 0.3em;
    height: 4vh;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

export const Modify = styled.section`
    display: flex;
    align-items: center;
`

export const Values = styled.section`
    display: flex;
    justify-content: space-around;
`

export const ValueUnitProduct = styled.h5`
`

export const Amount = styled.h5`
`

export const ButtonRemove = (props) => {

    const buttonStyle = {
        background: "transparent",
        backgroundImage: `url(${trashIcon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100% 100%",
        height: "4vh",
        width: "4vh",
        border: "none",
        borderRadius: "5px",

        cursor: "pointer"
    };

    return (
        <button style={buttonStyle} id={props.id} onClick={props.removeProductCart} />
    )
}

export const ButtonReduce = (props) => {

    const buttonStyle = {

        background: "transparent",
        backgroundImage: `url(${reduce})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100% 100%",
        height: "2.6vh",
        width: "2.6vh",
        border: "none",
        borderRadius: "5px",

        cursor: "pointer"
    }

    return (
        <button style={buttonStyle} id={props.id} onClick={(event) => props.onClickSetQuantity(event, -1)}></button>
    )
}

export const ButtonAdd = (props) => {

    const buttonStyle = {

        background: "transparent",
        backgroundImage: `url(${add})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100% 100%",
        height: "2.6vh",
        width: "2.6vh",
        border: "none",
        borderRadius: "5px",

        cursor: "pointer"
    }

    return (
        <button style={buttonStyle} id={props.id} onClick={(event) => (props.onClickSetQuantity(event, 1))}></button>
    )
} 

export const QuantitySection = styled.section`
    width: 80%;
    display: flex;
    gap: 0.5vw;
    align-items: center;
`