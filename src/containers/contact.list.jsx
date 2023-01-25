import React from 'react'
import { Contact } from '../models/contact.random'
import ContactComponent from '../pure/forms/contact';

export default function ContactList() {
    const defaultContact = new Contact("Default nombre", "Default Apellido", "email random",false);
  
  
    return (
    <div>
        <div>
            Tu contacto:           
        </div>
        <ContactComponent contact = {defaultContact} ></ContactComponent>
    </div>
  )
}
