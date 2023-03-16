import { useState } from "react"
import { BodyHeader, Logo, InputSearch, DivSearch, CartHeader, Search } from "./headerStyle"
import logo from "../../assets/img/logo.svg"

export const Header = (props) => {
    const [searchName, setSearchName] = useState('')

    const handleInputChangeSearchName = (event) => {
        setSearchName(event.target.value)
    }

    return (
        <BodyHeader>
            <Logo src={logo} />
            <DivSearch>
                <InputSearch id="nameProduct" placeholder={"Busque aqui seu produto"} onChange={handleInputChangeSearchName} />
                <Search onClick={props.onChangeSetFilters} value={searchName} />
            </DivSearch>
            <CartHeader handleSetShowCart={props.handleSetShowCart} />
        </BodyHeader>
    )
}