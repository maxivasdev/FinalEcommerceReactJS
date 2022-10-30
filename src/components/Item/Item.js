import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./item.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


function Item(props) {

    const { removeItem } = useContext(CartContext)

    const removeItemFunction = () => {
        const productToRemove = props.id
        removeItem(productToRemove)
    }

    return (
        <Card style={{ width: '18rem', padding: "1rem", margin: "15px", marginTop: "-150px" }} key={props.id}>
            <Card.Img variant="top" src={props.foto} sytle="height:50px" />
            <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <Card.Text>
                    ${props.precio}
                </Card.Text>
                {!props.removeButton ?
                    <Link to={`/detail/${props.id}`}>
                        <Button variant="primary">Detalle del producto</Button>
                    </Link>
                    :
                    <>
                        <div>Cantidad Seleccionada : {props.cantidadInCart}</div>
                        <Button variant="primary" onClick={removeItemFunction}>Eliminar del carrito</Button>
                    </>
                }

            </Card.Body>
        </Card>
    )

}

export default Item