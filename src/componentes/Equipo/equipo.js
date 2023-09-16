import "./equipo.css"
import Personaje from "../personaje/personaje"

const Equipo = (props) => {

    //Destructuracuín
    const { colorPrimario, colorSecundario, titulo } = props.datos
    const { personajes } = props
    const obj = {
        backgroundColor: colorSecundario
    }

    const estiloTitulo = { borderColor: colorPrimario }


return <>
        {personajes.length > 0 &&
            <section section className="equipo" style={obj} >
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="personajes">
                    {
                        personajes.map((personaje, index) => <Personaje 
                        datos={personaje} 
                        key={index} 
                        colorPrimario={colorPrimario}/>)
                    }
                </div>
            </section >
        }
    </>
}
export default Equipo