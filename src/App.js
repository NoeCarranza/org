import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/mi-org/org';
import Equipo from './componentes/Equipo/equipo';
import Footer from './componentes/footer/footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [personajes, actualizarPersonajes] = useState([
    {
    id: uuid(),
    nombre: "Obi-Wan Kenovi",
    puesto: "General Jedi del gran ejército de la República",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_o_DkuY_9f18Dfpgoqd7MVuU2uGk7kUN7GSp8E7E6RmU6DndfUbSE2yaMDcDGz7xG5YA&usqp=CAU",
    equipo: "Jedi",
    fav: true,
  },
  {
    id: uuid(),
    nombre: "Darth Vader",
    puesto: "Supremo Comandante de la Flota Imperial",
    foto: "https://images.squarespace-cdn.com/content/v1/5616ac17e4b018d366f57f53/6a1b8c38-0043-4398-806a-936e70911664/Darth+Vader+soundboard.png",
    equipo: "Sith",
    fav: true,
  },
  {
    id: uuid(),
    nombre: "Clone Troopers",
    puesto: "Soldados",
    foto: "https://cdn.icon-icons.com/icons2/1328/PNG/128/clone3_87099.png",
    equipo: "Clones",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "JarJar Binks",
    puesto: "Militar",
    foto: "https://icons.iconarchive.com/icons/jonathan-rey/star-wars-characters/256/Jar-Jar-Binks-icon.png",
    equipo: "Criatura",
    fav: true,
  },

  {
    id: uuid(),
    nombre: "BB-8",
    puesto: "Droide",
    foto: "https://pbs.twimg.com/profile_images/693839647059898368/RZa_miCJ_400x400.jpg",
    equipo: "Droide",
    fav: true
  },
  {
    id: uuid(),
    nombre: "Moff Gideon",
    puesto: "Comandante",
    foto: "https://tooys.mx/media/catalog/product/cache/39c7ff5a74bd9fa282a021db605b774d/m/o/moff-gideon_star-wars_iron-studios-12.jpg",
    equipo: "Miembro del Imperio",
    fav: false
  },
  {
    id: uuid(),
    nombre: "Han Solo",
    puesto: "Piloto Rebelde",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RdxPXGMeopOl0IRoVT3jD9VeE2cAvPn5vDcRBfd_OlEI028AzI_yRQ47iLSf79m1FHE&usqp=CAU",
    equipo: "Miembro de la Alianza Rebelde",
    fav: true,
  },
  {
    id: uuid(),
    nombre: "Din Djarion",
    puesto: "Cazarecompensas",
    foto: "https://st.cdjapan.co.jp/pictures/s/06/32/NEOGDS-492258.jpg?v=2",
    equipo: "Mandaloriano",
    fav: true,
  }

  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Clones",
      colorPrimario: "#838383",
      colorSecundario: "#c9cbcb",
    }
    ,

    {
      id: uuid(),
      titulo: "Criatura",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    }
    ,

    {
      id: uuid(),
      titulo: "Droide",
      colorPrimario: "#00aeff",
      colorSecundario: "#a1dcf7",
    }
    ,

    {
      id: uuid(),
      titulo: "Jedi",
      colorPrimario: "#00E7FF",
      colorSecundario: "#99F5FF",
    }
    ,

    {
      id: uuid(),
      titulo: "Miembro del Imperio",
      colorPrimario: "#E06B69",
      colorSecundario: "#ffa4a9",
    }
    ,

    {
      id: uuid(),
      titulo: "Miembro de la Alianza Rebelde",
      colorPrimario: "#6dc9fe",
      colorSecundario: "#B6E4FE",
    }
    ,
    {
      id: uuid(),
      titulo: "Sith",
      colorPrimario: "#ED2939",
      colorSecundario: "#E26259",
    }
    ,

    {
      id: uuid(),
      titulo: "Mandaloriano",
      colorPrimario: "#405F5B",
      colorSecundario: "#81bfb6",
    }
    ,

    {
      id: uuid(),
      titulo: "Otros",
      colorPrimario: "#57C278",
      colorSecundario: "#a3d1b1",
    }
  ]
  )

  //Ternario --> condicion ? semuestra : nosemuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }


  //Registrar personaje

  const RegistrarPersonaje = (PersonajeSW) => {
    console.log("Nuevo personaje", PersonajeSW)
    //spread operator
    actualizarPersonajes([...personajes, PersonajeSW])
  }

  //Eliminar personaje

  const eliminarPersonaje = (id) => {
    console.log("eliminar",id)
    const nuevoPersonaje = personajes.filter((PersonajeSW) => PersonajeSW.id !== id)
    actualizarPersonajes(nuevoPersonaje)
  }

  //Actualizar color de equipos

  const actualizarColor = (color, id) => {
    console.log("actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

//Crear Equipo

const crearEquipo = (nuevoEquipo) =>{
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid() }])
  console.log("Equipo creado:", nuevoEquipo)

}

const like = (id) =>{
  console.log("like",id)
  const personajesLike = personajes.map((Personaje) =>{
    if (Personaje.id === id){
      Personaje.fav = !Personaje.fav
    }
    return Personaje
  })
}


  return (
    <div>

      <Header />
      {/* { mostrarFormulario  ? <Formulario /> : <></>} es lo mismo  */}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          RegistrarPersonaje={RegistrarPersonaje}
          crearEquipo={crearEquipo}
        />

      }
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          personajes={personajes.filter(Personaje => Personaje.equipo === equipo.titulo)}
          eliminarPersonaje={eliminarPersonaje}
          actualizarColor={actualizarColor}
          like = {like}
        />
        )
      }
      <Footer />

    </div>
  );
}


export default App;
