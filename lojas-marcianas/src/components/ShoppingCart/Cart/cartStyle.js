import styled from "styled-components";
import close from "../../../assets/icons/close.svg"

export const ContainerCart = styled.section`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 74.5%;
    top: 5%;
    width: 25vw;
    height: 60vh;
    margin: 0 auto; 
    background: #A9A9A9;
    font-family: 'open sans';
    font-size: 0.85em;
    line-height: 1.6em;  
    border-radius: 15px;
    color: #1C1C1C;
    padding: 1.5vw;
    margin-top: 30px;

    ::before{
        content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 3.5vh solid transparent;
    border-right: 3.5vh solid transparent;
    border-bottom: 3.5vh solid #A9A9A9;
    top: -3.4vh; 
    left: 70%;
    }
`
export const Text = styled.p`
    margin-top: 2vh;
`
export const Title = styled.h4`
`
export const HeaderCart = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 2vh;
    margin-right: 2vh;
`
export const Itens = styled.aside`
    display: flex;
    flex-direction: column;
`

export const Close = (props) => {

    const buttonStyle = {

        background: "transparent",
        backgroundImage: `url(${close})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100% 100%",
        height: "3vh",
        width: "3vh",
        border: "none",
        borderRadius: "5px",
    }

    return <button style={buttonStyle} onClick={props.setShowCart} />
} 