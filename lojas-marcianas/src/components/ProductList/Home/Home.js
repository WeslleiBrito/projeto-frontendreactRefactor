import { ProductCard } from '../ProductCard/ProductCard'
import { SelectOrdination, Navigating, Lable, ContainerHome, DivSelectionOrdination, Cards } from './homeStyle'

import { SlBasket } from 'react-icons/sl'

export const Home = (props) => {

    function coinBrl(value) {
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }

    const addCart = () => {
    }

    return (
        <ContainerHome>

            <Navigating>
                <Lable>Quantidade de Produtos:</Lable>
                <DivSelectionOrdination>
                    <Lable htmlFor='ordination'>Ordenação:</Lable>
                    <SelectOrdination id='ordination' value={props.order} onChange={props.onChangeValueSelect}>
                        <option value={''} disabled>Selecione</option>
                        <option value={'crescent'}>Crescente</option>
                        <option value={'decrescent'} >Decrescente</option>
                    </SelectOrdination>
                </DivSelectionOrdination>
            </Navigating>

            <Cards>
                {props.products.map(item => <ProductCard key={item.id} imageUrl={item.imageUrl[0]} name={item.name} value={coinBrl(item.value)} addCart={addCart} cartIcon={<>{SlBasket}</>} />)}
            </Cards>

        </ContainerHome>
    )
}