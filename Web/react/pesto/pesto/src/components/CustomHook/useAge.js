import { useState } from "react"

export default function useAge(initialAge) {
    const [age, setAge] = useState(initialAge);
    const increaseAge = () => {
        setAge(age + 1);
    }
    const decreaseAge = () => {
        setAge(age - 1);
    }
    const resetAge = () => {
        setAge(0);
    }


    return [age, increaseAge, decreaseAge, resetAge];
}