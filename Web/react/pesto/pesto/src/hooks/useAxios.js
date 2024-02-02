import axios from 'axios';
import { useEffect, useState } from 'react';


export function useAxios(url, option) {
    const [isLoading, setIsLoading] = useState(false);
    const [apiDate, setApiDate] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        setIsLoading(true);
        const fetch = async () => {
            try {
                const { data } = await axios(url, option);
                console.log(data);
                setApiDate(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetch();
    }, [url])
    return [isLoading, apiDate, error];
}
