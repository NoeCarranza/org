import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/mi-org/org';
import Equipo from './componentes/Equipo/equipo';
import Personaje from './componentes/personaje/personaje';
import Footer from './componentes/footer/footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [personajes, actualizarPersonajes] = useState([{
  nombre:"Obi-Wan Kenovi",
  puesto:"General Jedi del gran ejército de la República",
  foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_o_DkuY_9f18Dfpgoqd7MVuU2uGk7kUN7GSp8E7E6RmU6DndfUbSE2yaMDcDGz7xG5YA&usqp=CAU",
  equipo:"Jedi"
  },
  {
    
nombre:"Darth Vader",
puesto:"Supremo Comandante de la Flota Imperial",
foto:"https://images.squarespace-cdn.com/content/v1/5616ac17e4b018d366f57f53/6a1b8c38-0043-4398-806a-936e70911664/Darth+Vader+soundboard.png",
equipo:"Sith",
  },
  {
    
nombre:"Clone Troopers",
puesto:"Soldados",
foto:"https://cdn.icon-icons.com/icons2/1328/PNG/128/clone3_87099.png",
equipo:"Clones",
  },
  {
    
nombre:"JarJar Binks",
puesto:"Militar",
foto:"https://icons.iconarchive.com/icons/jonathan-rey/star-wars-characters/256/Jar-Jar-Binks-icon.png",
equipo:"Criatura"
  },

  {
nombre:"BB-8",
puesto:"Droide",
foto:"https://pbs.twimg.com/profile_images/693839647059898368/RZa_miCJ_400x400.jpg",
equipo: "Droide"
  },
  {
    
nombre:"Moff Gideon",
puesto:"Comandante",
foto:"https://tooys.mx/media/catalog/product/cache/39c7ff5a74bd9fa282a021db605b774d/m/o/moff-gideon_star-wars_iron-studios-12.jpg",
equipo:"Miembro del Imperio"
  },
  {
    nombre:"Han Solo",
    puesto:"Piloto Rebelde",
    foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RdxPXGMeopOl0IRoVT3jD9VeE2cAvPn5vDcRBfd_OlEI028AzI_yRQ47iLSf79m1FHE&usqp=CAU",
    equipo:"Miembro de la Alianza Rebelde"
      },
      {
        nombre:"Din Djarion",
        puesto:"Cazarecompensas",
        foto:"https://st.cdjapan.co.jp/pictures/s/06/32/NEOGDS-492258.jpg?v=2",
        equipo:"Mandaloriano"
          }

])

const [equipos,actualizarEquipos] = useState([
    {
    titulo:"Clones",
    colorPrimario: "#838383",
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
        titulo:"Droide",
        colorPrimario: "#00aeff",
        colorSecundario: "#a1dcf7",
    }
    ,
  
    {
        titulo:"Jedi",
        colorPrimario: "#00E7FF",
        colorSecundario: "#99F5FF",
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
        colorPrimario: "#6dc9fe",
        colorSecundario: "#B6E4FE",
    }
    ,
    {
        titulo:"Sith",
        colorPrimario: "#ED2939",
        colorSecundario: "#E26259",
    }
    ,
  
    {
        titulo:"Mandaloriano",
        colorPrimario: "#405F5B",
        colorSecundario: "#81bfb6",
    }
    ,
  
    {
        titulo:"Otros",
        colorPrimario: "#57C278",
        colorSecundario: "#a3d1b1",
    }
  ]
)


  //Ternario --> condicion ? semuestra : nosemuestra
  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  
//Registrar personaje

const RegistrarPersonaje = (PersonajeSW) => {
  console.log("Nuevo personaje", PersonajeSW)
//spread operator
  actualizarPersonajes([...personajes, PersonajeSW])
}

//Eliminar personaje

const eliminarPersonaje = () =>{
  console.log("eliminar")
}

//Actualizar color de equipos

const actualizarColor = (color, titulo) =>{
  console.log("actualizar: ", color, titulo)
  const equiposActualizados = equipos.map((equipo)=>{
    if(equipo.titulo ===titulo){
      equipo.colorPrimario = color
    }
    return equipo
  })

  actualizarEquipos(equiposActualizados)
}

  return (
    <div>

      <Header/>
      {/* { mostrarFormulario  ? <Formulario /> : <></>} es lo mismo  */}
      {
      mostrarFormulario && <Formulario
          equipos={equipos.map((equipo)=> equipo.titulo)}
          RegistrarPersonaje={RegistrarPersonaje}
        />
        
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map( (equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        personajes={personajes.filter(Personaje => Personaje.equipo === equipo.titulo)}
        eliminarPersonaje={eliminarPersonaje}
        actualizarColor={actualizarColor}
        />
        )
      }
      <Footer/>

    </div>
  );
}


export default App;
