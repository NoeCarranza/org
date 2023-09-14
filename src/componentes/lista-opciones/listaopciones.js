import "./listaopciones.css"

const ListaOpciones = () =>{
    //metodo map: nombre del arreglo.map((equipos,index) => {return <option></option}))
    const equipos = [
        "Clones",
        "Criatura",
        "Droiode", 
        "Jedi", 
        "Miembro del Imperio", 
        "Miembro de la Alianza Rebelde",
        "Sith", 
        "Otros"
    ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            { equipos.map((equipo,index) => 
                <option key={index}>{equipo}</option>
            )}
        </select>
    </div>
}

export default ListaOpciones