import { useEffect , useState } from "react";
import ItemList from "./ItemList";
import ClipLoader from "react-spinners/ClipLoader";
import "../../css/ItemListContainer.css"
import { useParams } from "react-router-dom";
import {db} from "../../firebase/firebase";
import {getDocs,collection,query,where} from "firebase/firestore";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";


const ItemListContainer = ({greeting}) => {


    const [productos,setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);

    const {categoryId} = useParams();


    useEffect(()=>{
        
        
        const itemCollection = collection(db,"ItemCollection");
        let q ='';
        categoryId
        ? q = query(itemCollection,where("categoria", "==", categoryId))
        : q = collection(db,"ItemCollection")
        getDocs(q)

            .then((result)=>{
                const docs= result.docs
                
                if(docs.length > 0) 
                {const lista = docs.map
                    (p=>{
                    const id = p.id
                    const producto = {
                        id,
                        ...p.data()}
                    return producto
                    });
                    setProductos(lista);
                }else{
                    setError(true)
                }
                
            })

            .catch(()=>{
            setError(true);
            })

            .finally(()=>{
            setLoading(false);
            })

    },[categoryId]);


    return (
        <>
        <Box sx={{display:'flex', justifyContent:'center', marginTop:'10px'}}>
        <Typography sx={{fontSize:{xs:"20px", sm:'35px'},textAlign:'center'}}>{greeting}</Typography>
        </Box>

        {loading ? 

        <div className="divPadre">
            <div className="divHijo">
            <ClipLoader color={" rgb(235, 57, 211)"} loading={loading} size={100}  />
            </div>
        </div>

        :error ?

        <h3>Hubo un error al cargar o filtrar los productos</h3>

        :<ItemList items={productos}/>
        
        }

        </>
    )
}

export default ItemListContainer;
