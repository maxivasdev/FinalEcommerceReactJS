import { useContext, useState } from "react"
import { Card, Button } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"


function ItemDetail(props) {

    const { addItem } = useContext(CartContext)
    const [quantities, setQuantities] = useState()


    const functionCounter = (counter) => {
        setQuantities(counter)
        const productToCart = { item: props.item, quantity: counter }
        addItem(productToCart)
    }

    return (
        <Card style={{ width: '18rem' }} key={props.item.id}>
            <Card.Img variant="top" src={props.item.foto} />
            <Card.Body>
                <Card.Title>{props.item.nombre}</Card.Title>
                <Card.Text>
                    {props.item.descripcion}
                </Card.Text>
                <Card.Text>
                    ${props.item.precio}
                </Card.Text>
                <Card>
                    {quantities ? <>
                        <Link to={"/cart"}><Button style={{ width: "90%", backgroundColor: "grey", border: "grey" }}>Ir a mi carrito</Button></Link>
                        <Link to={"/"}><Button style={{ width: "90%", backgroundColor: "green", border: "green" }}>Seguir Comprando</Button></Link> </>
                        : <ItemCount stock={props.item.stock} initial={0} onAdd={functionCounter} />}
                </Card>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail