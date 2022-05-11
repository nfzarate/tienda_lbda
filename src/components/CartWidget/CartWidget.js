import React, {useContext} from 'react';
import {contexto} from '../../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';


const CartWidget = () => {

    const {cartItems} = useContext(contexto)
   
    return (
        
        <Badge badgeContent={cartItems} color="secondary" fontSize="large">
          <ShoppingCartIcon  color="action" fontSize="large"/>
        </Badge>
    );
}
export default CartWidget;