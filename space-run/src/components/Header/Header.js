import { useState } from "react"
import imageLogo from "../../assets/img/astronaut3.png"
import rocket from "../../assets/img/rocket.gif"
import { BodyHeader, InputSearch, DivSearch, CartHeader, Search, Rocket, LogoRocket } from "./headerStyle"



export const Header = (props) => {
    const [searchName, setSearchName] = useState('')
    const [hovering, setHovering] = useState(false);

    const handleInputChangeSearchName = (event) => {
        setSearchName(event.target.value)
    }


    const handleMouseOver = () => {
        setHovering(true);
    };

    const handleMouseOut = () => {
        setHovering(false);
    };

    return (
        <BodyHeader>
            <LogoRocket src={imageLogo} hovering={hovering} handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} />
            <DivSearch>
                <Rocket src={rocket} />
                <InputSearch id="nameProduct" placeholder={"Busque aqui seu produto"} onChange={handleInputChangeSearchName} />
                <Search click={props.onChangeSetFilters} value={searchName} />
            </DivSearch>
            <CartHeader handleSetShowCart={props.handleSetShowCart} />
        </BodyHeader>
    )
}