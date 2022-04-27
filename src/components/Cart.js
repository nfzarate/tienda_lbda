
import {contexto} from '../context/CartContext'
import React, {useEffect,useContext,useState} from 'react'
import '../css/cart.css'
import {Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {addDoc,collection,serverTimestamp,updateDoc, doc} from "firebase/firestore";
import {db} from "../firebase/firebase";
import {FormularioCompra} from "./FormularioCompra";

export const Cart = () => {

  const {clearCart,cart,deleteItem,total,calcularTotal} = useContext(contexto);

  const ventaCollection = collection(db, "ventas");
  const [finalizar, setFinalizar] = useState(false);
  const [IdVenta, setIdVenta] = useState('');
  const [mostrarId,setMostrarId] = useState(false);
  

  useEffect(()=>{
    calcularTotal()
  },[cart])

  
  
  

  const mostrarFormulario = ()=>{
    setFinalizar(true);
  }
  
const enviarPedido = (comprador) => {
  addDoc(ventaCollection, {
      comprador,
      items: cart,
      date: serverTimestamp(),
      total: total
  })
  .then((res)=>{
      setIdVenta(res.id);
  })
  .catch(()=>{
      console.log('error');
  })

  cart.forEach((product)=>{
      const stockUpdate = doc(db, "ItemCollection", product.id);
      const stockActual = product.stock - product.qty;
      updateDoc(stockUpdate, {stock:stockActual});
  })
  
  clearCart();
  setFinalizar(false);
  setMostrarId(true)
  
}


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
        <h4>Total: ${total}</h4>
         <button onClick={clearCart} className="vaciar-btn">Vaciar Carrito</button>
         <button className='btn-finalizar' onClick={mostrarFormulario}>Finalizar Compra</button>
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
      

    {
      finalizar &&
      <FormularioCompra enviarPedido= {enviarPedido} IdVenta={IdVenta}></FormularioCompra>
    }


    {
      mostrarId &&
      
      <div className="idContainer">
      <h3>¡Tu pedido se ha generado con éxito!</h3>
      <h4> ID: {IdVenta}</h4>
      <Link to="/">
      <button className="btn-idAceptar">Aceptar</button>
      </Link>
      </div>
      
    }


  </>
      
)

}
