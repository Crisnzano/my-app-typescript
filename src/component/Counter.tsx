import React, { useState } from "react";

type CounterProps ={
    initialCount: number;
};

const Counter = ({initialCount}: CounterProps) => {
    const [counter, setCounter] = useState<number>(initialCount);

    const delayedCount = () =>
    setTimeout(() => setCounter((counter) => counter +1), 2000);

    return (
    
        <>
            <div> Counter {counter}</div>
            {[-1, +1, -50, +50, -100, +100].map((value) =>(

            <button onClick= {() => setCounter(counter + value)}>{value}</button> ))}
            
            <button onClick={delayedCount}>Delayed +1 </button>

        </>
        
    );
};

export default Counter;