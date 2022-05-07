import "../css/Item.css"
import {Link} from "react-router-dom";

const Item = ({ item }) => {

  return (

  <div key={item.id} className="boxItem">

    <img src={item.pictureUrl} alt="fotoItem" className="fotoItem"/>
    <p>{item.title}</p>
    <p>${item.price}</p>
    <Link to={`/item/${item.id}`}>
    <button className="btnDetalles">Detalles</button>
    </Link>

  </div>

  )
};

export default Item;

