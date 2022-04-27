import React, {useState,useContext} from 'react'
import "../css/ItemDetail.css"
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import {contexto} from '../context/CartContext'

const ItemDetail = ({producto}) => {

  const {addItem} = useContext(contexto);

  const [finalizado,setFinalizado] = useState (false);
  

  const onAdd = (contador) =>{

    addItem(producto,contador)
    setFinalizado(true)
  }

  return (
      <>
    <div className="ItemDetailContainer">
        <img src={producto.pictureUrl} alt={producto.title}></img> 
        <div className="ItemDetailData">
            <h1>{producto.title}</h1>
            <span>${producto.price}</span>
            <div className="Description">
                <h3>Descripción</h3>
                {producto.description}
                <p>Stock disponible: {producto.stock}</p>
                {!finalizado
                ?(<ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />)
                :(<Link to="/cart">
                <button className="btn-finalizar">Ir al carrito</button>
                </Link>)}
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemDetail
