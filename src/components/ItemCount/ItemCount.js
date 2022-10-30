import { Button } from "react-bootstrap"
import { useState } from "react"

function ItemCount({ stock = 0, initial = 1, onAdd }) {

    const [count, setCount] = useState(initial)

    const increase = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    };

    const decrease = () => {
        if (count > initial) {
            setCount(count - 1)
        }

    };

    return (
        <>
            Elegir cantidad
            <button onClick={increase}>+</button>
            <button>{count}</button>
            <button onClick={decrease}>-</button>
            <Button disabled={count === 0} variant="primary" onClick={() => onAdd(count)}>{"Agregar al carrito"}</Button>
        </>
    )
}

export default ItemCount