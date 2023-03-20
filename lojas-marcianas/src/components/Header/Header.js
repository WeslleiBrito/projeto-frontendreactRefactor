import { useState } from "react"
import { BodyHeader, InputSearch, DivSearch, CartHeader, Search, Rocket, Comet, LogoRocket } from "./headerStyle"



export const Header = (props) => {
    const [searchName, setSearchName] = useState('')

    const handleInputChangeSearchName = (event) => {
        setSearchName(event.target.value)
    }

    const imagens = require.context('../../assets/img/imagesProducts/product1', false, /\.(png|jpe?g|svg)$/);

const importarImagens = (imagens) => {
  let imagensArray = [];
  imagens.keys().forEach((caminho) => {
    imagensArray.push(imagens(caminho));
  });
  return imagensArray;
};

const todasAsImagens = importarImagens(imagens);

console.log(todasAsImagens);
    return (
        <BodyHeader>
            <LogoRocket/>
            <DivSearch>
                <Rocket/>
                <InputSearch id="nameProduct" placeholder={"Busque aqui seu produto"} onChange={handleInputChangeSearchName} />
                <Search onClick={props.onChangeSetFilters} value={searchName} />
                <Comet/>
            </DivSearch>
            <CartHeader handleSetShowCart={props.handleSetShowCart} />
        </BodyHeader>
    )
}