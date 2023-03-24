
import styled from "styled-components";
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
    };

    return (
        <button style={buttonStyle} id={props.id} onClick={(event) => props.modifyIndexImage(event, -1)} />
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
    };

    return (
        <button style={buttonStyle} id={props.id} onClick={(event) => props.modifyIndexImage(event, 1)} />
    )

}

export const ShoppingCart = (props) => {

    const buttonStyle = {
        background: "transparent",
        backgroundImage: `url(${props.icon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100% 100%",
        height: "4vh",
        width: "4vh",
        border: "none",
    };

    return (
        <button style={buttonStyle} id={props.name} onClick={(event) => { props.addCart(event, 0, 1); props.handleSetIconCart() }} />
    )

}

export const Card = styled.li`
    height: 65vh;
    width: 18vw;
    display: flex;
    flex-direction: column;
    align-content: center;
    border-radius: 1em;
    padding-top: 1vh;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-2vh);
    }
`
export const ImagesItem = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48vh;
    margin-bottom: 1.5vh;

`
export const SectionDescription = styled.section`
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr;
  grid-row-gap: 3vh;
  border-radius: 0.5em;
`

export const Image = styled.img`
    height: 45vh;
    width: 18vw;
    border-radius: 1em;
`
export const NameProduct = styled.p`

    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

    font-family: 'Pacifico', cursive;;
    text-align: justify;
    font-size: 0.85rem;
    height: 7vh;
    width: 18vw;
    color: white;
    grid-column: 1 / 2;
    grid-row: 1 / 2; 


`
export const PriceProduct = styled.p`
    font-weight: 900;
    color: #051937;
  
`
export const Action = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 3.5vw;
`