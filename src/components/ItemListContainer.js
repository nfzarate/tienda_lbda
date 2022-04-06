import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import {listaProductos} from "../mock/listaProductos"
import { useEffect , useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "../css/ItemListContainer.css"
import { useParams } from "react-router-dom";


const promesa = new Promise ((res,rej)=>{
    setTimeout(() => {
        res(listaProductos)
    },2000);
})



const ItemListContainer = ({greeting}) => {


    const [productos,setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();


    useEffect(()=>{
        
        promesa.then((productos)=>{
           if(categoryId){
          setProductos(productos.filter(p=>p.categoria == categoryId))}

          else{setProductos(productos)}
        })
       .catch(()=>{
           console.log("error");
       })
       .finally(() => {
        setLoading(false);
        });
    },[categoryId]);



    const onAdd = (e)=> {
        alert(`Agregaste ${e} productos al carrito`)
    }


    return (
        <>
        <h2>{greeting}</h2>
        {loading ? 
        (<div className="divPadre">
            <div className="divHijo">
            <ClipLoader color={" rgb(235, 57, 211)"} loading={loading} size={100}  />
            </div>
        </div>)
        :(<ItemList items={productos}/>)
        }
        {/* <ItemCount stock={10} initial={1} onAdd={onAdd} /> */}
        </>
    )
}

export default ItemListContainer;
