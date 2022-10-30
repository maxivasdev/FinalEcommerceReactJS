import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"


function BuyerForm() {

    const { itemsOnCart, clear } = useContext(CartContext)

    const navigate = useNavigate();

    const [buyerData, setBuyerData] = useState({
        buyerName: "",
        buyerEmail: "",
        buyerEmailValidation: "",
        buyerPhone: "",
    })


    const placeOrder = () => {
        const order = {}
        order.buyer = buyerData
        order.productsToOrder = itemsOnCart.map(item => {
            const id = item.item.id
            const price = item.item.precio
            const title = item.item.nombre
            const quantity = item.quantity
            return { id, price, title, quantity }
        })
        const db = getFirestore()
        const queryInsertOrder = collection(db, "orders")
        addDoc(queryInsertOrder, order)
            .then(res => {
                clear()
                navigate(`/cart/checkout/${res.id}`)
            })
            .catch(err => console.log(err))

    }

    const onHandlerSubmit = (e) => {
        e.preventDefault()
        buyerData.buyerEmail === buyerData.buyerEmailValidation ? placeOrder() : alert("Los Email no coinciden")
    }

    const onHandleChange = (e) => {
        setBuyerData({
            ...buyerData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div style={{ border: "black 3px solid", width: "350px" }}>
            <form onSubmit={onHandlerSubmit}>
                <div>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="buyerName"
                            placeholder="Nombre"
                            value={buyerData.buyerName}
                            onChange={onHandleChange}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="buyerEmail"
                            placeholder="Email"
                            value={buyerData.buyerEmail}
                            onChange={onHandleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Validar Email:
                        <input
                            type="email"
                            name="buyerEmailValidation"
                            placeholder="Por favor, repita el mail"
                            value={buyerData.buyerEmailValidation}
                            onChange={onHandleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Telefono:
                        <input
                            type="number"
                            name="buyerPhone"
                            placeholder="Telefono"
                            value={buyerData.buyerPhone}
                            onChange={onHandleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Generar una orden</button>
            </form>
        </div>
    )

}
export default BuyerForm