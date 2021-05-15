import React, {Fragment, useState} from 'react';
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  //Array pricipal de citas - Inicia en un array vacío
  const [citas, guradarCitas] = useState([]);

  //Función que recoje las citas actuales y añade la nueva
  const crearCita = cita => {
    guradarCitas([
      ...citas,
      cita
    ])
  }

  return (
    <Fragment>
    <h1>Mi administrador</h1>

    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario 
            crearCita={crearCita}
          />
        </div>
        <div className="one-half column">
          <h2>CITAS</h2>
          {citas.map(cita => (
            <Cita 
              key={cita.id}
              cita={cita}
            />
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
