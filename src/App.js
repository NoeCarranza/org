import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/mi-org/org';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  //Ternario --> condicion ? semuestra : nosemuestra
  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header/>
      {/* { mostrarFormulario  ? <Formulario /> : <></>} es lo mismo  */}
      {mostrarFormulario && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
