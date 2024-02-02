import React, { memo } from 'react'
import AgeIncreament from './AgeIncreament'

function ShowAge({ age, name }) {
    console.log("ShowAge", name);
    return (
        <div>
            <h1>Name: {name} Age:- {age} </h1>
        </div>
    )
}

export default memo(ShowAge);
