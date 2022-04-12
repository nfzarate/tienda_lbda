
import {contexto} from '../context/CartContext'
import React, {useState,useContext} from 'react'

export const Cart = () => {

  const {clearCart,cart} = useContext(contexto);

  return (
    <>
    <h1>Soy Cart</h1>
    <button onClick={clearCart}>Vaciar Carrito</button>
    </>
  )
}

