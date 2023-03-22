import styled from "styled-components";
import trashIcon from "../../../assets/icons/trash.svg"
import reduce from "../../../assets/icons/reduce.svg"
import add from "../../../assets/icons/add.svg"



export const Text = styled.p`
    font-size: 0.8em;
`
export const Item = styled.li`
    display: grid;
    grid-template-columns: 12vh 1fr;
    grid-template-rows: 1fr 1fr;
    background-color: orange;
    height: 15vh;
    border-radius: 1em;
    margin-bottom: 2vh;
`

export const Description = styled.section`
    grid-column: 2 / 3;
    grid-row: 1 / 3;

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
    margin-top: 2vh;
    justify-content: space-around;
`

export const Values = styled.section`
    display: flex;
    justify-content: space-around;
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
        marginLeft: '0.3vw'
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
    }

    return (
        <button style={buttonStyle} id={props.id} onClick={(event) => props.handleInputQuantity(event, -1)}></button>
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
        <button style={buttonStyle} id={props.id} onClick={(event) => props.handleInputQuantity(event, 1)}></button>
    )
}

export const QuantitySection = styled.section`
    display: flex;
    gap: 0.5vw;
    align-items: center;
`

export const Photograph = (props) => {

    const stylePhotograph = {
        width: '100%',
        height: '100%',
        gridColumn: '1/2',
        gridRow: '1/3', 
        paddingTop: '1vh',
        paddingBottom: '1vh'
    } 

    return <img src={props.src} alt="foto do produto" style={stylePhotograph}/>
}