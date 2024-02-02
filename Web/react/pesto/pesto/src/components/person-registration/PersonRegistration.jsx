import React, { useState } from 'react';
import './PersonRegistration.css';

function PersonRegistration({ props }) {
    const [detail, setDetail] = useState({ Name: "", Age: "", Mobile: "" });

    function onSubmit() {
        props.onSubmit(detail);
        setDetail({ Name: "", Age: "", Mobile: "" });
    }

    return (
        <>
            <form className='form-div'>
                <div >
                    <label htmlFor="name">
                        Name:
                        <input type="text" value={detail.Name} onChange={(e) => setDetail({ ...detail, Name: e.target.value })} name="name" id="Name" />
                    </label>
                </div>
                <div >
                    <label htmlFor="name">
                        Age:
                        <input type="text" value={detail.Age} onChange={(e) => setDetail({ ...detail, Age: e.target.value })} name="name" id="Age" />
                    </label>
                </div>
                <div>
                    <label htmlFor="mobile">
                        Mobile:
                        <input type="text" value={detail.Mobile} onChange={(e) => setDetail({ ...detail, Mobile: e.target.value })} name="Mobile" id="Mobile`" />
                    </label>
                </div>
                <div>
                    <button type="button" onClick={onSubmit} >Register</button>
                </div>
            </form >
        </>
    )
}

export default PersonRegistration;