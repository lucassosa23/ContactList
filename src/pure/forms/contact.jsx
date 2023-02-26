import React from 'react'
import Proptypes from "prop-types";
import {Contact} from "../../models/contact.random"






const  ContactComponent = ({contact, completed, remove}) => {
  

  
  function ContactCompleted (){
    if (contact.conectado) {
      return(<i onClick={() => completed(contact)} className='bi-toggle-on task-action' style={{color: "green"}}></i>);
     
     }else{ 
          return(<i  onClick={() =>completed(contact)} className='bi-toggle-off task-action' style={{color: "red "}}></i>);
      }
    };
  
    return (
      
    <table className='table'>
        <thead>
        <tr className='ms-2'>
          <th> 
              <span className='name-contact'> Nombre: {contact.name}</span>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td className='align-middle'>
          <span className='apellido-contact'> Apellido: {contact.apellido}</span>
        </td>
        </tr>
        <tr>
        <td className='align-middle'>
          <span className='email-contact'> Email: {contact.email}</span>
        </td>
        </tr>
        <tr>
        <td className='align-middle'>
          {ContactCompleted()}
          
          <span className='estado-contact'> Estado :</span>
          <i className='bi-trash task-action' style={{color: "red"}} onClick={() => remove(contact)}></i>
          
          
      
        </td>
        </tr>
        

        </tbody>
    
   
      

     </table>
  )

  
    }
ContactComponent.propTypes = {

    contact: Proptypes.instanceOf(Contact).isRequired,
    completed: Proptypes.func.isRequired,
    remove: Proptypes.func.isRequired


    };



    export default ContactComponent;