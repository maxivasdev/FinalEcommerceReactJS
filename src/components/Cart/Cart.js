import { Link } from "react-router-dom"
import { useContext } from "react"
import { CardGroup, Button } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"
import Item from "../Item/Item"
import BuyerForm from "../BuyerForm/BuyerForm"


function Cart() {
  const { itemsOnCart, clear, total } = useContext(CartContext)


  return (
    !itemsOnCart.length == 0 ?
      <>
        <CardGroup>
          {itemsOnCart.map((item) => {
            return <>
              <Item id={item.item.id} foto={item.item.foto} nombre={item.item.nombre} descripcion={item.item.descripcion} precio={item.item.precio} key={item.item.id}
                removeButton={true} cantidadInCart={item.quantity} subTotalItem={item.item.precio * item.quantity}>
              </Item>
            </>
          })}
        </CardGroup >
        <button onClick={clear}>Eliminar todos los articulos</button>
        <div>Total ${total}</div>
        <BuyerForm></BuyerForm>
      </>
      :
      <>
        <div>¡Tu carrito esta esta vacio!</div>
        <Link to="/"><Button>Navegar para ver mas articulos</Button></Link>
      </>
  )
}

export default Cart