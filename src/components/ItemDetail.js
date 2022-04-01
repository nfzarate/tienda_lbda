import React from 'react'
import "../css/ItemDetail.css"
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {

  return (
      <>
    <div className="ItemDetailContainer">
        <img src={producto.pictureUrl} alt={producto.title}></img> 
        <div className="ItemDetailData">
            <h1>{producto.title}</h1>
            <span>${producto.price}</span>
            <p className="Description">
                <h3>Descripción</h3>
                {producto.description}
            </p>
        </div>
    </div>
    </>
  )
}

export default ItemDetail