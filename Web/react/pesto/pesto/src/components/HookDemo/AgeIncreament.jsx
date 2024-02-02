import React, { memo } from 'react'

function AgeIncreament({ handleAge, personName }) {
    console.log("AgeIncreament", personName);
    return (
        <div>
            <input type="button" value="Inc" onClick={() => handleAge(1)} />
            <input type="button" value="dec" onClick={() => handleAge(-1)} />
        </div>
    )
}

export default memo(AgeIncreament);