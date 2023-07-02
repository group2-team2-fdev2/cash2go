import React from 'react'
import "../Messages/Messages.css";
import MessageCheckbox from './MessageCheckbox';
import Button from '../components/DashboardHeader/Button';

function MessageAlert({closeModal}) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='MessageAlert-closebtn'>
        <button className='messageAlert-cbt' onClick={() => closeModal(false)}> x </button>
        </div>
        <div className='MessageAlert-text'>
          <div>
            <MessageCheckbox />
          </div>
        <div className='messageAlert-title'>
          <h3>Delete selected item(s) ? </h3>
        </div>
        <div className='messageAlert-body'>
          <p>Are you sure you want to delete selected item (s).</p>
          <p>The process is irreversible</p>
        </div>
        <div className='messageAlert-footer'>
          <Button onClick={() => closeModal(false)}
          title="No"
  
           />
          <Button 
          title="Yes"
          backgroundColor="#FF6F5A" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default MessageAlert
