
import {contexto} from '../context/CartContext'
import React, {useEffect,useContext} from 'react'
import '../css/cart.css'
import {Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const Cart = () => {

  const {clearCart,cart,deleteItem,total,calcularTotal} = useContext(contexto);


  useEffect(()=>{
    calcularTotal()
  },[cart])


  return (
  <>  
    {
      cart.length
      
      ? 

      (
      <>
  
      {cart.map((product)=>(

      <div key={product.id}>
        <h4 className="productTitle">{product.title}</h4>
        <div className="divProducto">
          <img src={product.pictureUrl} alt="fotoProducto"></img>
          <div>
            <h4>Cantidad: {product.qty}</h4>
            <h4>Precio: ${product.price}</h4>
            <h4>Subotal: ${product.qty*product.price}</h4>
          </div>
          <button className="delete-btn" onClick={()=>{deleteItem(product.id)}}><DeleteOutlineIcon fontSize="medium"/></button>
        </div>
      </div>
      ))}

      <div className="pieCarrito">
         <button onClick={clearCart} className="vaciar-btn">Vaciar Carrito</button>
         <h4>Total: ${total} </h4>
      </div>

      </>

      )
      
      : 

      (
        <>
        <div className="divCarritoVacio">
          <h2>¡No hay productos agregados al carrito!</h2>
          <Link to="/"><button className="btn-agregar">Agregar productos</button></Link>
        </div>
        </>

      )      

    }
  </>
      
)

}
