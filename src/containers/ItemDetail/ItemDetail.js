import React, {useState,useContext} from 'react';
import {contexto} from '../../context/CartContext';
import ItemCount from "../../components/ItemCount/ItemCount";
import "../../css/ItemDetail.css";
import { Link } from "react-router-dom";


const ItemDetail = ({producto}) => {

  const {addItem} = useContext(contexto);

  const [finalizado,setFinalizado] = useState (false);
  

  const onAdd = (contador) =>{

    addItem(producto,contador)
    setFinalizado(true)
  }

  return (
  
    <div className="ItemDetailContainer">
      <div className="ItemDetailData">
        <img src={producto.pictureUrl} alt={producto.title}></img> 
        
            <h2>{producto.title}</h2>
            <span>${producto.price}</span>
            <div className="Description">
                <p>{producto.description}</p>
                <p>Stock disponible: {producto.stock}</p>
            </div>

            <div>

                {!finalizado

                ? <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />

                : 

                <>
                  <Link to="/cart">
                    <button className="btn-carrito">Ir al carrito</button>
                  </Link>
                  <Link to="/">
                  <button className="btn-seguir">Seguir comprando</button>
                  </Link>
                </>

                }
            </div>
        </div>
    </div>
    
  )
  
}

export default ItemDetail
