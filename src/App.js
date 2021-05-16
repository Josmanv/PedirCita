import React, {Fragment, useState, useEffect} from 'react';
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {


  //citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  //Array pricipal de citas - Inicia en un array vacío
  const [citas, guardarCitas] = useState(citasIniciales);

  //Use effect para poder realizar ciertas operaciones cuando el state cambia 
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
}, [citas]);

  //Función que recoje las citas actuales y añade la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  //Función para elimiar la cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  const titulo = citas.length === 0 ? "Añade una nueva cita" : "Tus citas";

  return (
    <Fragment>
    <h1 className="cabecera">Solicite Cita</h1>

    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario 
            crearCita={crearCita}
          />
        </div>
        <div className="one-half column">
          <h2>{titulo}</h2>
         
          {citas.map(cita => (
            <Cita 
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
