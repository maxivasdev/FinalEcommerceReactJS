import { createContext, useState } from "react";

//Contexto

export const CartContext = createContext();

//Componente

export function CartProvider({ children }) {
    
    const [itemsOnCart, setItemsOnCart] = useState([])

    const isInCart = (item) => {
        return (itemsOnCart.find(producto => producto.item.id === item.item.id) ? true : false)
    }

    const addItem = (item) => {
        let items = [...itemsOnCart]
        if (!isInCart(item)) {
            items.push(item);
        } else {
            let existingItem = itemsOnCart.find(producto => producto.item.id === item.item.id)
            existingItem.quantity += item.quantity;
        }
        setItemsOnCart(items)
    }

    const removeItem = (id) => {
        setItemsOnCart(itemsOnCart.filter(x => x.item.id !== id))
    }

    const changeQuantity = (item) => {
        let existingItem = itemsOnCart.find(producto => producto.item.id === item.item.id)
        existingItem.quantity = item.quantity;
    }

    const clear = () => {
        setItemsOnCart([])
    }

    const total = itemsOnCart.reduce((previous, current) => previous + current.item.precio * current.quantity, 0)

    return (
        <CartContext.Provider value={{ itemsOnCart, addItem, removeItem, clear, changeQuantity, total }}>
            {children}
        </CartContext.Provider>
    )
}
