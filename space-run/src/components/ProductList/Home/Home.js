import { ProductCard } from '../ProductCard/ProductCard'
import { ContainerHome, Cards } from './homeStyle'

export const coinBrl = (value) => {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

export const Home = (props) => {


    return (
        <ContainerHome>
            <Cards>
                {props.products.map(item => <ProductCard key={item.id} image={item.images[item.indexImage]} name={item.name.toUpperCase()} value={coinBrl(item.value)} addCart={props.addCart} idItem={item.id} modifyIndexImage={props.modifyIndexImage} />)}
            </Cards>
        </ContainerHome>
    )
}