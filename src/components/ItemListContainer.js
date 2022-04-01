import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect , useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "../css/ItemListContainer.css"

const listaProductos = [
    {id: 1, title: "Aersosol Saphirus", description: "Aerosol Aromatizador", price:250, pictureUrl: "https://tiendasaphirus.com.ar/wp-content/uploads/2020/11/aerosol_limon-600x600.jpg"},
    {id: 2, title: "Aerosol Ambar", description: "Aerosol Aromatizador", price:200, pictureUrl: "https://tiendasaphirus.com.ar/wp-content/uploads/2020/11/limon-latas-ambar-600x600.jpg"},
    {id: 3, title: "Aromatizador Textil", description: "Aromatizador para telas", price:150, pictureUrl: "https://tiendasaphirus.com.ar/wp-content/uploads/2020/11/textil_bebe-600x600.jpg"},
];

const promesa = new Promise ((res,rej)=>{
    setTimeout(() => {
        res(listaProductos)
    },2000);
})



const ItemListContainer = ({greeting}) => {


    const [productos,setProductos] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        
        promesa.then((productos)=>{
            setProductos(productos)
        })
       .catch(()=>{
           console.log("error");
       })
       .finally(() => {
        setLoading(false);
        });
    },[]);



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
