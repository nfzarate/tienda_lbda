import React, {useState} from "react";
import '../css/formularioCompra.css';

export const FormularioCompra = ({enviarPedido,IdVenta}) => {

  const [comprador, setComprador] = useState({
    nombre: "",
    apellido: "",
    email: ""
  });

  
  const handlerSubmit = (evt) => {
    evt.preventDefault();
    enviarPedido(comprador);
  }

  const handlerChange = (target) => {
      setComprador({...comprador,[target.name]:target.value});
  }
  

  return (
    <div className="divContainer">
        <h2>Para conformar el pedido completá el formulario con tus datos </h2>
        <div className='formulario'>
        <form 
        onSubmit={handlerSubmit}
        onChange={({target})=>{handlerChange(target)}} 
        className='formularioCompra'>

          <label htmlFor="email" >Nombre:</label>
          <input
            id="nombre"
            name="nombre"
            type="nombre"
            placeholder='Juan'
            defaultValue={comprador.nombre}
          />

          <label htmlFor="apellido" >Apellido:</label>
          <input
            id="apellido"
            name="apellido"
            type="apellido"
            placeholder='Perez'
            defaultValue={comprador.apellido}
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder='ejemplo@gmail.com'
            defaultValue={comprador.email}
          />
          <input id='btn-enviarPedido' type="submit" value="Enviar pedido"/>
        </form>
      </div>
    </div>
  );
}