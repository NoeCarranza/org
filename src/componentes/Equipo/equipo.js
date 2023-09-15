import "./equipo.css"
import Personaje from "../personaje/personaje"
const Equipo = (props) =>{

    //Destructuracuín
    const {colorPrimario,colorSecundario, titulo} = props.datos
    const obj = {
        backgroundColor:colorSecundario
    }

    const estiloTitulo = {borderColor:colorPrimario}


    return <section className="equipo" style={obj}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="personajes">
            <Personaje/>
            <Personaje/>
        </div>
    </section>
}

export default Equipo