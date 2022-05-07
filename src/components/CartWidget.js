import React, {useContext} from 'react';
import {contexto} from '../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';


const CartWidget = () => {

    const {cartItems} = useContext(contexto)
   
    return (
        
        <Badge className="badge" badgeContent={cartItems} color="secondary" fontSize="large">
          <ShoppingCartIcon className='btn-cart' color="action" fontSize="large"/>
        </Badge>
    );
}
export default CartWidget;