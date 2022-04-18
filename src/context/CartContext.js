import React, { createContext, useState } from "react";



export const contexto = createContext();

const { Provider } = contexto;

const CustomProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    const[total,setTotal] = useState(0);

    const[cartItems,setCartItems] = useState(0);


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
        let cartFiltered = cart.filter(x=>x.idProducto !== id)
        setCart(cartFiltered)
    }

    const isInCart = (id) =>{
       if(cart.find(x=>x.idProducto === id))
       return true
    }

    const getCantidadItems = () => {
        let cantidadItems=0
        cart.forEach((e)=> {cantidadItems += e.qty
        })
        setCartItems(cantidadItems)
    }

    

    const calcularTotal = ()=>{
            let acumulador= 0
            cart.forEach((x)=>{
              acumulador += x.price * x.qty;
            })
            setTotal(acumulador)
         }


    const clearCart = ()=> {
        setCart([])
        setTotal(0)
        setCartItems(0);
    }



return (
<Provider value={{cart,total,cartItems,addItem,deleteItem,getCantidadItems,clearCart,isInCart,calcularTotal}}>
    {children}
</Provider>
);

}

export default CustomProvider;





