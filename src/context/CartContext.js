import React, { createContext, useState } from "react";



export const contexto = createContext();

const { Provider } = contexto;

const CustomProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    const addItem = (product, qty)=>{
        const newProduct = {
            ...product,qty
        };
        if(isInCart(product.idProducto)){
            const productFind = cart.find(x=>x.idProducto === newProduct.idProducto);
            const index= cart.indexOf(productFind);
            const copy = [...cart];
            copy[index].qty += qty;
            setCart(copy);
        }else{
            setCart([...cart,newProduct])
        }
    }

    const deleteItem  = (id)=>{
        const cartFiltered = [cart.filter(x=>x.idProducto !== id)]
        setCart([...cart,cartFiltered])
    }

    const isInCart = (id) =>{
       if(cart.find(x=>x.idProducto === id))
       return true
    }

    const getcantidadItems = (e) => {
       console.log(e.length);
    }

    const clearCart = ()=> {
        setCart([])
    }


return (
<Provider value={{cart,addItem,deleteItem,getcantidadItems,clearCart,isInCart}}>
    {children}
</Provider>
);

}

export default CustomProvider;