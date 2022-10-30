import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from "react-bootstrap"


function CheckOut() {
    const { id } = useParams()
    return (
        <>
            <div>Gracias por comprar en Todo para tu Perro!! Tu orden {id} ha sido generada.</div>
            <Link to={"/"}><Button style={{ width: "30%", backgroundColor: "green", border: "green" }}>Seguir Comprando</Button></Link>
        </>
    )
}

export default CheckOut