import cart from "./png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png"
import "./CartWidget.css"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

const Carrito = () => {
    const { itemsOnCart } = useContext(CartContext)
    let productCount = (itemsOnCart.reduce((previous, current) => previous += current.quantity, 0))

    return (
        <>
            {productCount > 0 ? <span style={{ color: "gray", fontSize: "30px", borderRadius: "25%", border: "solid 2px black", textAlign: "center" }}>{productCount}</span> : ""}
            <img src={cart} className="Carrito" alt="icono Carrito" />
        </>
    )

}

export default Carrito