import { useState } from "react"
import { Card, Image, NameProduct, PriceProduct, SectionDescription, ArrowLeft, ArrowRight, ShoppingCart, ImagesItem, Action } from "./productCardStyle"
import cartIcon from "../../../assets/icons/cart.svg"
import checkCart from "../../../assets/icons/checkCart.gif"



export const ProductCard = (props) => {
    const [iconOfCart, setIconOfCart] = useState(cartIcon)

    const handleSetIconCart = () => {

        setIconOfCart(checkCart)

        setTimeout(() => {
            setIconOfCart(cartIcon)
        }, 560)
    }

    return (
        <>
            <Card>

                <ImagesItem>
                    <ArrowLeft id={props.idItem} modifyIndexImage={props.modifyIndexImage} />
                    <Image src={props.image} alt="Foto do produto" />
                    <ArrowRight id={props.idItem} modifyIndexImage={props.modifyIndexImage} />
                </ImagesItem>

                <SectionDescription>

                    <NameProduct>{props.name}</NameProduct>

                    <Action>
                        <PriceProduct>{props.value}</PriceProduct>
                        <ShoppingCart addCart={props.addCart} name={props.idItem} icon={iconOfCart} handleSetIconCart={handleSetIconCart} />
                    </Action>

                </SectionDescription>

            </Card>

        </>
    )
}