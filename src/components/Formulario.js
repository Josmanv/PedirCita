import React, { Fragment, useState } from 'react';
import {v4 as uuid} from 'uuid'

const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    });

    const [error, actualizarError] = useState(false);

    //Función que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        })
    }

    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //Cuando se presiona enviar
    const submitCita = e =>{
        e.preventDefault();
        // validar
        if(
            mascota.trim()==="" ||
            propietario.trim()==="" ||
            fecha.trim()==="" ||
            hora.trim()==="" ||
            sintomas.trim()===""
        ){
            actualizarError(true);
            return;
        }

        //Eliminamos el mesnsaje de error si procede
        actualizarError(false);
        //Asignar una id
        cita.id=uuid();
        //Crear la cita
        crearCita(cita);
        //Reiniciar el Form
        actualizarCita({
            mascota: "",
            propietario: "",
            fecha: "",
            hora: "",
            sintomas: ""
        });
    }

    return ( 
        <Fragment>
            <h2>Pedir cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>  : null}

            <form
                onSubmit={submitCita}
            >
            <label>Nombre Mascota</label>
            <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={actualizarState}
                value={mascota}
            />
            <label>Nombre Dueño</label>
            <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre Dueño"
                onChange={actualizarState}
                value={propietario}
            />
            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
            />
            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}
            />
            <label>Síntomas</label>
            <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value={sintomas}
            ></textarea>
            <button
                type="submit"
                className="u-full-width button-primary"
            >
            Añadir
            </button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;