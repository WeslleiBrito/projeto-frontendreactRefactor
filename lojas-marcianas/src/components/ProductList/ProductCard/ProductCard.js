import { Card, Image, NameProduct, PriceProduct, SectionPrice, ArrowLeft, ArrowRight, ShoppingCart, ImagesItem } from "./productCardStyle"


export const ProductCard = (props) => {
    return (
        <>
            <Card>

                <ImagesItem>
                    <ArrowLeft />
                    <Image src={props.imageUrl} alt="Foto do produto" />
                    <ArrowRight />
                </ImagesItem>
                <NameProduct>{props.name}</NameProduct>
                <SectionPrice>
                    <PriceProduct>{props.value}</PriceProduct>
                    <ShoppingCart onClickAddCart={props.onClickAddCart} idItem={props.idItem}/>
                </SectionPrice>
                
            </Card>

        </>
    )
}