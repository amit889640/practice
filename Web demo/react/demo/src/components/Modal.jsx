import React from 'react'
import './Modal.css'
function Modal({ data, handleClose }) {
    return (
        <div className='main'>
            <button className='close' onClick={() => handleClose()}>X</button>
            <h3>{data.desc}</h3>
        </div >
    )
}

export default Modal