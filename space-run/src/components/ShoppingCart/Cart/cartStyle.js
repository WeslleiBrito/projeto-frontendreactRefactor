import styled from "styled-components";
import close from "../../../assets/icons/close.svg"

export const ContainerCart = styled.section`
    display: grid;
    position: absolute;
    left: 69%;
    top: 5%;
    width: 30vw;
    height: 70vh;
    background: #1e6264;
    font-family: 'open sans';
    font-size: 0.85em;
    line-height: 1.6em;  
    border-radius: 1em;
    color: #1C1C1C;
    padding: 1.5vw;
    margin-top: 5vh;
    justify-content: center;
    

    ::before{
        content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 3.5vh solid transparent;
    border-right: 3.5vh solid transparent;
    border-bottom: 3.5vh solid #1e6264;
    top: -3.3vh; 
    left: 76.8%;
    }
`
export const Text = styled.p`
    margin-top: 2vh;
    display: flex;
    justify-self: end;
    font-size: 1rem;
    font-weight: 900;
    color: beige;
`

export const HeaderCart = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 2vh;
    margin-right: 2vh;
`
export const Itens = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    height: 51.5vh;
    width: 26vw;
    overflow-y: auto;
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    padding-top: 0.5vh;
    align-items: center;
   
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