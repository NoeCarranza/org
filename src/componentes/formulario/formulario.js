import { useState } from "react"
import "./formulario.css"
import Campo from "../campo/campo"
import ListaOpciones from "../lista-opciones/listaopciones"
import Boton from "../boton-crear/boton-crear"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarequipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")
    
    const {RegistrarPersonaje,crearEquipo} = props

    console.log("Nuevo equipo:", { titulo, color });

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo:equipo
        }
        RegistrarPersonaje(datosAEnviar)

    }

    const manejarNuevoEquipo = (e) =>{
    e.preventDefault()
    crearEquipo({titulo, colorPrimario:color})
    }


    return <section className="formulario">

        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para agregar un personaje de la saga</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresa el nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Profesión"
                placeholder="Ingresala profesión"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}

            />
            <Campo
                titulo="Foto"
                placeholder="Ingresa el enlace de la foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />

            <ListaOpciones 
            valor={equipo}
            actualizarequipo={actualizarequipo}
            equipos={props.equipos}

            
            />
            <Boton texto="Agregar personaje" />
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para agregar un equipo de la saga</h2>
            <Campo
                titulo="Equipo"
                placeholder="Ingresa el nombre del equipo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresa el color en Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton texto="Agregar equipo" />
        </form>
    </section>
}

export default Formulario