import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import ItemDetail from './ItemDetail';
import "../css/ItemListContainer.css"
import { useEffect , useState } from "react";
import {useParams} from "react-router-dom";
import {db} from "../firebase/firebase";
import {doc,getDoc,collection} from "firebase/firestore"


const ItemDetailContainer = () => {

  const [producto,setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();

  useEffect(()=>{

    const itemCollection = collection(db,"ItemCollection")
    const refDoc = doc(itemCollection,id)
    getDoc(refDoc)
    .then((result)=>{
      const item = {
        id,
        ...result.data()
      }
      setProducto(item);
    })
   .catch(()=>{
       console.log("error");
   })
   .finally(() => {
    setLoading(false);
})

},[id]);

  return (
    <>

    {loading

    ?(<div className="divPadre">
        <div className="divHijo">
        <ClipLoader color={" rgb(235, 57, 211)"} loading={loading} size={100}/>
        </div>
      </div>)

    :<ItemDetail producto={producto}/>
    }

    </>
  )
}

export default ItemDetailContainer