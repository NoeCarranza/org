import { useState } from "react"

import "./campoTexto.css"
const CampoTexto = (props) => {
    const[valor, actualizarValor] = useState("")

    
    const placeholderModificado = `${props.placeholder}...`
    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }


    return (<div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
        placeholder={props.placeholderModificado} 
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        />
    </div>)
}

export default CampoTexto