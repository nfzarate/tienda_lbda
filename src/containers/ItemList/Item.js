import "../../css/Item.css"
import {Link} from "react-router-dom";
import { Card, CardActionArea, CardMedia,Typography,CardContent,CardActions } from "@mui/material";

const Item = ({ item }) => {

  return (

  <Card className="boxItem">
    <CardActionArea >
      <CardMedia className="fotoItem" component="img" image={item.pictureUrl} alt={item.title}/>
      <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize:'18px'}}>
            ${item.price}
          </Typography>
        </CardContent>
    </CardActionArea>
    <CardActions>
        <Link to={`/item/${item.id}`}>
          <button className="btnDetalles">Detalles</button>
        </Link>
      </CardActions>
  </Card>

  )
};

export default Item;
