import React from 'react'
import Item from './Item'
import "../css/ItemList.css"


const ItemList = ({items}) => {


    return(

        <div className="contenedor">
            
            {items.map((it) => (

                <Item item={it}/>
            
            ))}
            
        </div>
    )
};


export default ItemList;
