import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import {contexto} from '../context/CartContext';
import React, {useContext,useEffect} from 'react';


const CartWidget = () => {

    const {cartItems,getCantidadItems,cart} = useContext(contexto)

    useEffect(()=>{
        getCantidadItems()
    },[cart])

    return (
        
        <Badge className="badge" badgeContent={cartItems} color="secondary" fontSize="large">
          <ShoppingCartIcon className='btn-cart' color="action" fontSize="large"/>
        </Badge>
    );
}
export default CartWidget;