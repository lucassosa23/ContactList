
import {React, useState} from 'react'
import { Contact } from '../models/contact.random'
import ContactComponent from '../pure/forms/contact';

export default function ContactList() {
   const defaultContact1 = new Contact("example", "default 1", "email", false)
   const defaultContact2 = new Contact("example", "default apellido2", "email", true)
   const defaultContact3 = new Contact("example", "default apellido", "email", false)


   const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3]);

    
    function completeConect(contact) {
        console.log("Contacto:", contact);
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact[index].conectado = ! tempContact[index].conectado
        setContacts(tempContact);
    }

    function contactDeleted(contact){
        console.log("contacto eliminado", contact);
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.splice(index, 1);
        setContacts(tempContact);

    }
  
    return (
    <div>
        <div className='col-12'>
            <div className='card'>
                <div className='card-header p-3'>
                <h5>
                    Tu contacto
                </h5>
                </div>
                <div className='card-body' data-mdb-perfect-scrollbar="true" style={{ height:"400px"}}>
                    <table>
                            <thead>
                                <tr> 
                                  
                                    <th scope='col' className='title-1'>Title</th> 
                                    <th scope="col" className='description'>Description</th>
                                    <th scope='col' className='prioridad'>Priority</th>
                                    <th scope='col' className='action'>Action</th>
                                    
                                </tr>
                            </thead>
                        
                            <tbody> 
                            
                             {contacts.map((contact, index)=>{
                                return (
                                         
                                    <td >
                                <ContactComponent 
                                key={index}
                                contact={contact}
                                completed= {completeConect}
                                remove = {contactDeleted}>
                                
                                
                                </ContactComponent>
                               
                                    </td>
                                )
                             })}
                            
                             
                               
                                
                            </tbody>
                        </table>  
                </div>
            
         </div>
                       
        </div>
        
        
        </div>
    )

}

