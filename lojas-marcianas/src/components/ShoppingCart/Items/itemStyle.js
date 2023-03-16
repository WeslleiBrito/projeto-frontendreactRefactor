import styled from "styled-components";
import trashIcon from "../../../assets/icons/trash.svg"


export const Text = styled.p`
    
`
export const Item = styled.li`
    display: flex;
    flex-direction: column;
`

/* export const Item = styled.li`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-0.7vh);
  }
`;
 */

export const Quantity = styled.input`
    text-align: center;
    width: 3vw;
`

export const Modify = styled.section`
`

export const Values = styled.section`
    display: flex;
    justify-content: space-around;
`

export const ValueUnitProduct = styled.h5`
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

        cursor: "pointer"
    };

    return (
        <button style={buttonStyle} id={props.id} onClick={props.removeProductCart} />
    )
}
