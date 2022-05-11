import React, {useState} from "react";
import '../../css/formularioCompra.css';

export const FormularioCompra = ({enviarPedido}) => {

  const [comprador, setComprador] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono:""
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
        <h3>Para conformar el pedido completá el formulario con tus datos </h3>
        <div className='formulario'>
        <form 
        onSubmit={handlerSubmit}
        onChange={({target})=>{handlerChange(target)}} 
        className='formularioCompra'>

          <label htmlFor="nombre" >Nombre:</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder='Juan'
            defaultValue={comprador.nombre}
            required
          />

          <label htmlFor="apellido" >Apellido:</label>
          <input
            id="apellido"
            name="apellido"
            type="text"
            placeholder='Perez'
            defaultValue={comprador.apellido}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder='ejemplo@gmail.com'
            defaultValue={comprador.email}
            required
          />
          <label htmlFor="telefono">Teléfono:</label>
          <input
          id="telefono"
          name="telefono"
          type="number"
          placeholder='1166916438'
          defaultValue={comprador.telefono}
          required
          />
          <button id='btn-enviarPedido' type="submit">Enviar pedido</button>
        </form>
      </div>
    </div>
  );
}