import "./equipo.css"
import Personaje from "../personaje/personaje"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    //Destructuracuín
    const { colorPrimario, colorSecundario, titulo } = props.datos
    const { personajes, eliminarPersonaje,actualizarColor } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.5)
    }

    const estiloTitulo = { borderColor: colorPrimario }


return <>
        {personajes.length > 0 &&
            <section section className="equipo" style={obj} >
                <input
                    type='color'
                    className="input__color"
                    value={hexToRgba(colorPrimario, 0.5)}
                    onChange={(evento)=>{
                        actualizarColor(evento.target.value, titulo)
                    }}
                
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="personajes">
                    {
                        personajes.map((personaje, index) => <Personaje 
                        datos={personaje} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarPersonaje={eliminarPersonaje}
                        />
                        )
                    }
                </div>
            </section >
        }
    </>
}
export default Equipo