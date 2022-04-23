import ItemList from "./ItemList";
import { useEffect , useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "../css/ItemListContainer.css"
import { useParams } from "react-router-dom";
import {db} from "../firebase/firebase";
import {getDocs,collection,query,where} from "firebase/firestore";


const ItemListContainer = ({greeting}) => {


    const [productos,setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();


    useEffect(()=>{
        
        const itemCollection = collection(db,"ItemCollection")
        
        let q;

        categoryId
        ? q = query(itemCollection,where("categoria", "==", categoryId))
        : q = collection(db,"ItemCollection")

        getDocs(q)
        .then((result)=>{
            const docs= result.docs
            const lista = docs.map(p=>{
                const id = p.id
                const producto = {
                    id,
                    ...p.data()}

                return producto
            });
            setProductos(lista);
        })
        .catch(()=>{
            console.log("error")})

        .finally(() => {
                setLoading(false);
            })
    },[categoryId]);


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
        </>
    )
}

export default ItemListContainer;
