
import React from "react";
import styled from "styled-components";
import cartHeader from "../../assets/icons/cartHeader.svg"
import search from "../../assets/icons/search.svg"


export const BodyHeader = styled.header`
    height: 20vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10vh;
    padding-right: 10vh;
    grid-column: 1 / 4;
    grid-row: 1 / 2;

`

export const LogoRocket = ({ src, hovering, handleMouseOver, handleMouseOut }) => {

    const styleLogoRocket = {
        height: '15vh',
        width: '15vh',
        transition: 'transform 0.2s',
        transform: hovering ? 'scale(1.1)' : 'scale(1)'
    }

    return (
        <img src={src} style={styleLogoRocket} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} alt="Logo do foguete" />
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

export const Rocket = ({ src }) => {
    const styleRocket = {
        height: '13vh',
        width: '15vh',
        position: 'absolute',
        transform: 'rotate(70deg)',
        left: '-3vw',

    }
    return (
        <img src={src} style={styleRocket} alt="Foguete" />
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
        <button style={buttonStyle} onClick={props.click} value={props.value} id={"nameProduct"} />
    )
}
