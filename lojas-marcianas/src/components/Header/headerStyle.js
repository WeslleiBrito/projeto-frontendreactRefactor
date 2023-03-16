
import styled from "styled-components";
import cartHeader from "../../assets/icons/cartHeader.svg"
import search from "../../assets/icons/search.svg"


export const BodyHeader = styled.section`
    height: 12vh;
    width: 100%;
    background-color: #F80032;
    display: flex;
    align-items: center;
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
        marginRight: "10vh",
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
