import React, { createContext, useState,useEffect } from "react";



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
        if(isInCart(product.id)){
            const productFind = cart.find(x=>x.id === newProduct.id);
            const index= cart.indexOf(productFind);
            const copy = [...cart];
            copy[index].qty += qty;
            setCart(copy);
        }else{
            setCart([...cart,newProduct])
        }
    }

    const deleteItem  = (id)=>{
        let cartFiltered = cart.filter(x=>x.id !== id)
        setCart(cartFiltered)
    }

    const isInCart = (id) =>{
       if(cart.find(x=>x.id === id))
       return true
    }

    useEffect(()=>{
    const getCantidadItems = () => {
        let cantidadItems=0
        cart.forEach((e)=> {cantidadItems += e.qty
        })
        setCartItems(cantidadItems)
    };
    getCantidadItems();
    },[cart])

    
    useEffect(()=>{
    const calcularTotal = ()=>{
            let acumulador= 0
            cart.forEach((x)=>{
              acumulador += x.price * x.qty;
            })
            setTotal(acumulador)
        };
        calcularTotal();
    },[cart])


    const clearCart = ()=> {
        setCart([])
        setTotal(0)
        setCartItems(0)
    }



return (
<Provider value={{cart,total,cartItems,addItem,deleteItem,clearCart,isInCart}}>
    {children}
</Provider>
);

}

export default CustomProvider;





