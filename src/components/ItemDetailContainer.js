import React from 'react'
import { productoInicial } from '../mock/productoInicial';
import ItemDetail from './ItemDetail';
import { useEffect , useState } from "react";


    
 const promesa = new Promise ((res,rej)=>{
        setTimeout(() => {
            res(productoInicial)
        },2000);
    })


const ItemDetailContainer = () => {

  const [producto,setProducto] = useState([]);

  useEffect(()=>{
    
    promesa.then((producto)=>{
        setProducto(producto)
    })
   .catch(()=>{
       console.log("error");
   })
},[]);

  return (
    <>
    <ItemDetail producto={producto}/>
    </>
  )
}

export default ItemDetailContainer