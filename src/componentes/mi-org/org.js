import "./org.css"

const MiOrg = (props) =>{
    //Estado Hooks
    //useState() const [nombreVariable, funcion] = useState(valorinicial)
    //const [nombre,actualizarNombre] = useState()
    console.log(props)

    return <section className="orgSection">
        <h3 className="title">Personajes de Star Wars</h3>
        <img src= "/img/Botão add-01 1.png" alt="boton" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg