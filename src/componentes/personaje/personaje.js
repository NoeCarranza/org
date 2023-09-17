import "./personaje.css"
import {AiTwotoneDelete,AiFillHeart,AiOutlineHeart} from "react-icons/ai"

const Personaje = (props) => {
    const { nombre,puesto,foto,id,fav} = props.datos
    const {colorPrimario,eliminarPersonaje, like} =props
    
    //condicion ? verdadero : falso


    
    return <div className="personaje">
        <AiTwotoneDelete  className="eliminar" onClick ={()=> {eliminarPersonaje(id)}}/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="#44a9a9" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
            
        </div>

    </div>
}

export default Personaje