
import React from "react";
import styled from "styled-components";
import cartHeader from "../../assets/icons/cartHeader.svg"
import search from "../../assets/icons/search.svg"
import imageLogo from "../../assets/img/astronaut3.png"
import rocket from "../../assets/img/rocket.gif"
import comet from "../../assets/img/comet.gif"




export const BodyHeader = styled.header`
    height: 20vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10vh;
    padding-right: 10vh;

`

export const Logo = styled.div`
    background-image: url(${imageLogo});
    height: 20vh;
    width: 25vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    
`
export const LogoRocket = () => {
    const styleLogoRocket = {
        height: '15vh',
        width: '15vh',
       
    }

    return(
        <img src={imageLogo} style={styleLogoRocket} alt="Logo do foguete"/>
    )
}

export const DivSearch = styled.div`
    width: 35%;
    height: 7vh;
    display: flex;
    align-items: center;
    background-color: #ffff;
    gap: 2vw;
    position: relative;
    border-radius: 1em;
    border-bottom: 0.3em;
    border-right: 0.2em;
    border-top: 0.15em;
    border-left: 0.1em;
    border-style: solid;
    border-color: #ffc051;
    

`

export const Rocket = () => {
    const styleRocket = {
        height: '13vh',
        width: '15vh',
        position: 'absolute',
        transform: 'rotate(70deg)',
        left: '-3vw',
     
    }
    return(
        <img src={rocket} style={styleRocket} alt="Foguete"/>
    )
}

export const InputSearch = styled.input`
    width: 90%;
    height: 4vh;
    border: none;
    margin-left: 3vw;
    outline: none;
    padding-left: 1vw;
`

export const Comet = () => {
    const styleRocket = {
        height: '13vh',
        width: '15vh',
        position: 'absolute',
        transform: 'rotate(15deg)',
        left: '29vw',
        bottom: '0.1vh',
    
    }
    return(
        <img src={comet} style={styleRocket} alt="Cometa"/>
    )
}

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
        cursor: "pointer",
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
        backgroundSize: "cover",
        height: "4vh",
        width: "4vh",
        border: "none",
        marginRight: "1.8vw",
    };

    return (
        <button style={buttonStyle} onClick={() => props.onClick(null, props.value)} />
    )
}
