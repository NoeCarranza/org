import "./listaopciones.css"

const ListaOpciones = (props) =>{
    //metodo map: nombre del arreglo.map((equipos,index) => {return <option></option}))
    const equipos = [
        
        "Clones",
        "Criatura",
        "Droiode", 
        "Jedi", 
        "Miembro del Imperio", 
        "Miembro de la Alianza Rebelde",
        "Sith", 
        "Mandaloriano",
        "Otros"
    ]

    const manejarCambio = (e) => {
        console.log("cambio",e.target.value)
        props.actualizarequipo(e.target.value)
    } 

    return <div className="lista-opciones" onChange={manejarCambio}>
        <label>Equipos</label>
        <select value={props.valor}>
            <option value="" disabled defaultValue="" hidden> Seleecionar equipo</option>
            { equipos.map((equipo,index) => 
                <option key={index}  value={equipo}>{equipo}</option>
            )}
        </select>
    </div>
}

export default ListaOpciones