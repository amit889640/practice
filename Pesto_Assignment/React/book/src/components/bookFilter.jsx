import React, { useState } from 'react'

export default function BookFilter({ getBookByName }) {
    const [name, setName] = useState('');
    const handleBookFilter = () => { getBookByName(name); };
    return (
        <div>
            <label htmlFor="queryBook">Search book</label>
            <input type="text" placeholder='Search book' value={name} onChange={(e) => setName(e.target.value)} id='queryBook' />
            <button onClick={handleBookFilter}>Search</button>
        </div>
    )
}
