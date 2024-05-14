import React, { useState } from 'react';
import ContactChip from './ContactChip'

function Contact() {
    const [contacts, setContacts] = useState([]);
    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');

    const handleSubmit = () => {
        setContacts([...contacts, { name: inputName, phone: inputPhone }]);
        setInputName('');
        setInputPhone('');
    }
    return (
        <div>
            <label htmlFor="">
                Name: <input type="text" name="inputName" value={inputName} onChange={(e) => setInputName(e.target.value)} id="" />
            </label>
            <label htmlFor="">
                Phone: <input type="text" Phone="inputPhone" value={inputPhone} onChange={(e) => setInputPhone(e.target.value)} id="" />
            </label>
            <button onClick={handleSubmit}>Submit</button>
            <div>
                {contacts.map((c) => {
                    return <ContactChip contact={c} />
                })}
            </div>
        </div>
    )
}

export default Contact