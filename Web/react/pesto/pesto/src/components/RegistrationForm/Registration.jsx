import React, { useState } from 'react'

export default function Registration() {
    const [detail, setDetail] = useState({ myCar: "Tata" });
    const handleSubmit = () => {
        console.log(detail);
    }

    const handleChangeInputs = (e) => {
        setDetail(values => ({ ...values, [e.target.name]: e.target.value }))
    }

    return (
        <>
            <div>
                <input type="text" name="name" id="name" onChange={handleChangeInputs} value={detail.name} />
                <input type="number" name="age" id="age" onChange={handleChangeInputs} value={detail.age} />
                <select value={detail.myCar} name="myCar" id="" onChange={handleChangeInputs}>
                    <option value="Maruti">Maruti</option>
                    <option value="Tata">Tata</option>
                    <option value="Mahindra">Mahindra</option>
                </select>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}
