import React from 'react'
import { listaProductos } from '../mock/listaProductos';
import ItemDetail from './ItemDetail';
import { useEffect , useState } from "react";
import {useParams} from "react-router-dom";


    
 const promesa = new Promise ((res,rej)=>{
        setTimeout(() => {
            res(listaProductos)
        },2000);
    })


const ItemDetailContainer = () => {

  const [producto,setProducto] = useState([]);

  const {id} = useParams();

  useEffect(()=>{
    
    promesa.then((producto)=>{
      
        setProducto(producto.find(p=>p.idProducto == id))
        //console.log(producto);
    })
   .catch(()=>{
       console.log("error");
   })
},[id]);

  return (
    <>
    <ItemDetail producto={producto}/>
    </>
  )
}

export default ItemDetailContainer