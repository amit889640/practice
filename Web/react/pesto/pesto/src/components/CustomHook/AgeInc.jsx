import React, { useState } from 'react'
import useAge from './useAge';


export default function AgeInc() {

    const [age, increaseAge, decreaseAge, resetAge] = useAge(5);
    return (
        <div>
            <h1>Age:- {age}</h1>
            <h1>{JSON.stringify(age)}</h1>
            <button type="button" onClick={increaseAge}>Increase Age</button>
            <button type="button" onClick={decreaseAge}>Decrease Age</button>
            <button type="button" onClick={resetAge}>Reset Age</button>
        </div>
    )
}
