import React, { useState } from 'react'

export default function Counter() {
    const [input, setInput] = useState(0);
    const [countHead, setCountHead] = useState(0);

    const handleInc = () => { setCountHead((prev) => prev + 1) }

    return (
        <div>
            <h1>Count is : {countHead}</h1>
            <input type="number" value={input} onChange={(e) => { setInput(e.target.value) }} />
            <button onClick={handleInc}>Inc</button>
        </div>
    )
}
