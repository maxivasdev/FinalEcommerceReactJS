import Item from '../Item/Item';
import { CardGroup } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

function ItemList(items) {

    return (
        <CardGroup>
            {items.items.map((item) => {
                return <Item id={item.id} foto={item.foto} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} key={item.id} />
            })}
        </CardGroup>
    )

}
export default ItemList