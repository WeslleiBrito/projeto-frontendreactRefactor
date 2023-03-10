
import styled from "styled-components";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import cartIcon from "../../../assets/icons/cart.svg"


export const ArrowLeft = () => {
    return (
        <>
            <SlArrowLeft
                style={
                    {
                        width: "5vh",
                        height: "5vh",
                        left: '5%',
                        top: '50%',
                        position: 'absolute'
                    }
                }
            />
        </>
    )
}

export const ArrowRight = () => {
    return (
        <>
            <SlArrowRight
                style={
                    {
                        width: "5vh",
                        height: "5vh",
                        position: "absolute",
                        right: "5%",
                        top: "50%",

                    }
                }
            />
        </>
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

export const Card = styled.article`
    height: 63vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-content: center;
    border: 1px solid black;
    border-radius: 1em;
    padding-top: 1vh;
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
