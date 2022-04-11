import React, {useState}  from 'react'
import "../css/ItemDetail.css"
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({producto}) => {

  const [finalizado,setFinalizado] = useState (false);
  const [count,setCount] = useState (0)

  const onAdd = (contador) =>{

    setFinalizado(true)
    setCount(contador)
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
                <button className="btn-finalizar">Finalizar Compra</button>
                </Link>)}
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemDetail
