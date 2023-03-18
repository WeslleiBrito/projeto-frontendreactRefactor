
import styled from "styled-components";
import cartHeader from "../../assets/icons/cartHeader.svg"
import search from "../../assets/icons/search.svg"
import backGroundHeader from "../../assets/img/backgroundHeader.jpg"



export const BodyHeader = styled.header`
    height: 20vh;
    width: 100%;
    display: flex;
    align-items: center;
    background-image: url(${backGroundHeader});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`

export const Logo = styled.img`
    width: 5vw;
    margin-left: 8vw;
`

export const InputSearch = styled.input`
    width: 90%;
    height: 4vh;
    border: none;
    margin-left: 3vw;
`

export const DivSearch = styled.div`
    width: 40%;
    height: 7vh;
    display: flex;
    align-items: center;
    background-color: #ffff;
    margin-right: 30vw;
    margin-left: 10vw;
    gap: 2vw;
`

export const CartHeader = (props) => {

    const buttonStyle = {
        background: "transparent",
        backgroundImage: `url(${cartHeader})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100% 100%",
        height: "6vh",
        width: "6vh",
        border: "none",
        borderRadius: "5px",
        marginRight: "8.5vh",
        cursor: "pointer"
    };

    return (
        <button style={buttonStyle} onClick={props.handleSetShowCart} />
    )
}

export const Search = (props) => {

    const buttonStyle = {
        background: "transparent",
        backgroundImage: `url(${search})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100% 100%",
        height: "6vh",
        width: "6vh",
        border: "none",
        borderRadius: "5px",
        marginRight: "3vw",
        cursor: "pointer"
    };

    return (
        <button style={buttonStyle} onClick={() => props.onClick(null, props.value)} />
    )
}
