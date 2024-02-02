import React, { useReducer } from 'react'


const INITIALVALUE = 10;
function reducer(state = INITIALVALUE, action) {
    switch (action) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }

}

export default function ReducerDemo() {
    const [count, dispatch] = useReducer(reducer, INITIALVALUE);

    return (
        <div>
            <h1>Reducer function </h1>
            <div>
                Count:{count}
            </div>
            <button type="button" onClick={() => dispatch("INC")}>INC</button>
            <button type="button" onClick={() => dispatch("DEC")}>DEC</button>
        </div>
    )
}

