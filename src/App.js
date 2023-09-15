import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/mi-org/org';
import Equipo from './componentes/Equipo/equipo';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [Personaje, actualizarPersonaje] = useState([])
  //Ternario --> condicion ? semuestra : nosemuestra
  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  
//Registrar personaje

  const registrarPersonaje = (personaje) =>{
    console.log("Nuevo personaje", personaje)
    //Spread operator
    actualizarPersonaje([...Personaje,personaje])
  }


const equipos = [
  {
  titulo:"Clones",
  colorPrimario: "##838383",
  colorSecundario: "#c9cbcb",
  }
  ,

  {
  titulo:"Criatura",
  colorPrimario: "#FF8A29",
  colorSecundario: "#FFEEDF",
  }
  ,
  
  {
      titulo:"Droiode",
      colorPrimario: "#00aeff",
      colorSecundario: "#a1dcf7",
  }
  ,

  {
      titulo:"Jedi",
      colorPrimario: "rgb(0, 252, 181)",
      colorSecundario: "rgb(158, 248, 223)",
  }
  ,

  {
      titulo:"Miembro del Imperio",
      colorPrimario: "#E06B69",
      colorSecundario: "#ffa4a9",
  }
  ,

  {
      titulo:"Miembro de la Alianza Rebelde",
      colorPrimario: "#6dc9fe ",
      colorSecundario: "#82CFFA",
  }
  ,
  {
      titulo:"Sith",
      colorPrimario: "#4b0000",
      colorSecundario: "#b78989",
  }
  ,

  {
      titulo:"Mandaloriano",
      colorPrimario: "#00f8d3",
      colorSecundario: "#81bfb6",
  }
  ,

  {
      titulo:"Otros",
      colorPrimario: "#57C278",
      colorSecundario: "#a3d1b1",
  }
]
  return (
    <div>

      <Header/>
      {/* { mostrarFormulario  ? <Formulario /> : <></>} es lo mismo  */}
      {
      mostrarFormulario && <Formulario
        equipos={equipos.map((equipo)=> equipo.titulo)}
        registrarPersonaje = {registrarPersonaje}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map( (equipo) => <Equipo datos={equipo} key={equipo.titulo} />)
      }

    </div>
  );
}


export default App;
