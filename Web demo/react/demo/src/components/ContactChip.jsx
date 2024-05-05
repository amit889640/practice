import React from 'react'

export default function ({ contact }) {
    console.log(contact)
    return (
        <div style={{ display: 'inline' }}>
            <div>
                Name:{contact.name}
            </div>
            <div>
                Phone:{contact.phone}
            </div>
        </div >
    )
}
