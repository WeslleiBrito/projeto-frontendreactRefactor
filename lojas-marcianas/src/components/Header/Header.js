import { useState } from "react"
import { BodyHeader, InputSearch, DivSearch, CartHeader, Search, Rocket, Comet, LogoRocket } from "./headerStyle"



export const Header = (props) => {
    const [searchName, setSearchName] = useState('')

    const handleInputChangeSearchName = (event) => {
        setSearchName(event.target.value)
    }


    return (
        <BodyHeader>
            <LogoRocket />
            <DivSearch>
                <Rocket />
                <InputSearch id="nameProduct" placeholder={"Busque aqui seu produto"} onChange={handleInputChangeSearchName} />
                <Search click={props.onChangeSetFilters} value={searchName} />
                <Comet />
            </DivSearch>
            <CartHeader handleSetShowCart={props.handleSetShowCart} />
        </BodyHeader>
    )
}