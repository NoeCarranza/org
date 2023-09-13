import "./formulario.css"
import CampoTexto from "../campoTexto/campoTexto"

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para agregar un personaje de la saga</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresa el nombre"/>
            <CampoTexto titulo="Profesión" placeholder="Ingresala profesión"/>
            <CampoTexto titulo="Foto" placeholder="Ingresa el enlace de la foto"/>
            <CampoTexto />
        </form>
    </section>
}

export default Formulario