import React from 'react'
import Item from './Item'
import "../css/ItemList.css"
import { useState } from "react";
import {Link} from "react-router-dom";

const ItemList = ({items}) => {

const element = items.map(it =>{
    return(
        <div key={it.idProducto} className="boxItem">
            <img src={it.pictureUrl} alt="fotoItem" className="fotoItem"/>
            <p>{it.title}</p>
            <p>${it.price}</p>
            <Link to={`/item/${it.idProducto}`}>
            <button className="btnDetalles">Detalles</button>
            </Link>
        </div>
    )
})

    return(
        <Item item={element}></Item>
    )
}


export default ItemList;