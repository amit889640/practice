import react, { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import Button from './Button';

export function Display() {
    const [amit, setAmit] = useState(1)
    const [sumit, setSumit] = useState(1)


    const calculatedValue = useMemo(() => {
        console.log('calculation time');
        // example expensive computation using outer `sumit`
        return sumit * 2;
    }, [sumit]);

    const initialCount = 0
    const reducer = (state, action) => {
        switch (action.type) {
            case 'inc': {
                return state + 1;
            }
            case 'dec': {
                return state - 1;
            }
            default: return state
        }
    }
    const [count, dispatch] = useReducer(reducer, initialCount)


    const incAmit = () => {
        console.log('Inc Amit fun');
        setAmit((prev) => prev + 1)
    }

    const incSumit = useCallback(() => {
        console.log('Inc sumit fun');
        setSumit((prev) => prev + 1)
    }, [sumit])
    // console.log('Display render', { amit, sumit });
    return (
        <>
            <h1>amit:{amit}</h1>
            <Button label="amit" inc={incAmit}></Button>
            <h1>sumit:{sumit}</h1>
            <Button label="sumit" inc={incSumit}></Button>
            {calculatedValue}
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: 'inc' })}>Inc count</button>
            <button onClick={() => dispatch({ type: 'dec' })}>dec count</button>
        </>
    )
}