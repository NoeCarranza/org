import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../campoTexto/campoTexto"
import ListaOpciones from "../lista-opciones/listaopciones"
import Boton from "../boton-crear/boton-crear"

const Formulario = () => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarequipo] = useState("")



    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo:equipo
        }
        console.log(datosAEnviar)

    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para agregar un personaje de la saga</h2>
            <CampoTexto
                titulo="Nombre"
                placeholder="Ingresa el nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <CampoTexto
                titulo="Profesión"
                placeholder="Ingresala profesión"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}

            />
            <CampoTexto
                titulo="Foto"
                placeholder="Ingresa el enlace de la foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />

            <ListaOpciones 
            valor={equipo}
            actualizarequipo={actualizarequipo}

            
            />
            <Boton texto="Agregar personaje" />
        </form>
        
    </section>
}

export default Formulario