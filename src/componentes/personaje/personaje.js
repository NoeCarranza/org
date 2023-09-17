import "./personaje.css"
import {AiTwotoneDelete} from "react-icons/ai"

const Personaje = (props) => {
    const { nombre,puesto,foto,equipo} = props.datos
    const {colorPrimario,eliminarPersonaje} =props
    return <div className="personaje">
        <AiTwotoneDelete  className="eliminar" onClick ={eliminarPersonaje}/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>

    </div>
}

export default Personaje