import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ShowAge from './ShowAge';
import AgeIncreament from './AgeIncreament';

function HookDemo() {

    const [vikasAge, setVikasAge] = useState(20);
    const [akashAge, setAkashAge] = useState(21);

    const count = useRef(0);
    const className = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    })

    const changeAkashAge = useCallback((value) => {
        setAkashAge((a) => a + value)
    }, [akashAge])

    const changeVikasAge = useCallback((value) => {
        setVikasAge((a) => a + value)
    }, [vikasAge])

    const showName = useMemo(() => {
        console.log('showName');
        return ["Amit", "Vikas", "Kekda", "Phepda"].map((n) => {
            return <>
                <div>Name:{n}</div>
            </>
        })
    }, [])

    return (
        <div>
            <div>Re-render count:- {count.current}</div>

            <ShowAge name="Akash" age={akashAge} />
            <AgeIncreament handleAge={changeAkashAge} personName='Akash' />

            <ShowAge name="Vikas" age={vikasAge} />
            <AgeIncreament handleAge={changeVikasAge} personName='Vikas' />

            <div>
                {showName}
            </div>

            <div>
                <h1>Use Ref demo focus input</h1>
                <label htmlFor="name"></label>
                <input autoFocus type="text" name="" id="name" />

                <label htmlFor="className"></label>
                <input ref={className} type="text" name="" id="className" />

                <button type="button" onClick={() => { className.current.focus() }}>Focus on class </button>
            </div>

        </div >
    )
}

export default HookDemo;