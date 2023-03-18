
import styled from "styled-components";
import cartIcon from "../../../assets/icons/cart.svg"
import arrowRight from "../../../assets/icons/arrowRight.svg"
import arrowLeft from "../../../assets/icons/arrowLeft.svg"

export const ArrowLeft = (props) => {
    const buttonStyle = {
        background: "transparent",
        position: "absolute",
        left: "5%",
        top: "50%",
        backgroundImage: `url(${arrowLeft})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "6vh",
        width: "6vh",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer", 
    };

    return (
        <button style={buttonStyle} id={props.id} onClick={(event) => props.modifyIndexImage(event, -1)}/>
    )
}

export const ArrowRight = (props) => {

    const buttonStyle = {
        background: "transparent",
        position: "absolute",
        right: "5%",
        top: "50%",
        backgroundImage: `url(${arrowRight})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "6vh",
        width: "6vh",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer", 
    };

    return (
        <button style={buttonStyle} id={props.id} onClick={(event) => props.modifyIndexImage(event, 1)} />
    )

}

export const ShoppingCart = (props) => {

    const buttonStyle = {
        background: "transparent",
        backgroundImage: `url(${cartIcon})`,
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
        <button style={buttonStyle} id={props.name} onClick={(event) => props.addCart(event, 0, 1)} />
    )

}

export const Card = styled.li`
    height: 63vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-content: center;
    border: 1px solid black;
    border-radius: 1em;
    padding-top: 1vh;

    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-2vh);
    }
`
export const ImagesItem = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SectionPrice = styled.section`
  display: flex;
  justify-content: space-around;
  gap: 2vw;
  margin-top: 5.5vh;
  margin-right: 1vw;
  
`

export const Image = styled.img`
    height: 45vh;
    width: 97%;
`
export const NameProduct = styled.p`
    text-align: justify;
    font-weight: 700;
    margin-left: 0.5vw;
    margin-right: 0.5vw;
    height: 6vh;
`
export const PriceProduct = styled.p`
    
`
