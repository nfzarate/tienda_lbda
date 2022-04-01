import React from 'react'
import Item from './Item'
import "../css/ItemList.css"
import { useState } from "react";

const ItemList = ({items}) => {

const element = items.map(it =>{
    return(
        <div key={it.id} className="boxItem">
            <img src={it.pictureUrl} alt="fotoItem" className="fotoItem"/>
            <p>{it.title}</p>
            <p>${it.price}</p>
            <button class="btnDetalles">Detalles</button>
        </div>
    )
})

    return(
        <Item item={element}></Item>
    )
}


export default ItemList;