import React from 'react';
import { useAxios } from '../../hooks/useAxios';

export function ApiFetchDemo() {
    const [isLoading, apiDate, error] = useAxios('https://jsonplaceholder.typicode.com/posts/1', { method: 'GET' });
    return (
        <div>
            <div> ApiDemo</div>
            <div>Api response</div>
            {isLoading && <h1>Loading...</h1>}
            {error && error.message && < h1 > {JSON.stringify(error)}</h1>}
            <div>{JSON.stringify(apiDate)}</div>
        </div >
    )
}
