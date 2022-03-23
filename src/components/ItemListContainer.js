import ItemCount from "./ItemCount";


const ItemListContainer = ({greeting}) => {

    const onAdd = (e)=> {
        alert(`Agregaste ${e} productos al carrito`)
    }

    return (
        <>
        <h2>{greeting}</h2>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer;