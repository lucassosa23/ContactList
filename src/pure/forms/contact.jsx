import React from 'react'
import Proptypes from "prop-types";
import {Contact} from "../../models/contact.random"


export default function  ContactComponent(contact) {
  return (
    <div>

        <h1>Nombre: {contact.name}</h1>
        <h2>Apellido : {contact.apellido}</h2>
        <h3>Email: {contact.email}</h3>
        <h4>Conectado: {contact.conectado ? "Contacto En Línea" : "Contacto No Disponible"}</h4>
    </div>
  )
};


ContactComponent.propTypes = {

    contact: Proptypes.instanceOf(Contact)
    };
