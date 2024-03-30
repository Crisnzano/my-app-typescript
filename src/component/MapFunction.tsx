import React, { useState } from "react";



const PointsCounter = ({startCounter}: PointsProps) => {
    const [points, setCounter] = useState<number>(startCounter);

    const collision = () =>
    setTimeout(() => setCounter((points) => points +1), 2000);

    return (
    
        <>
            <div> PointsCounter {points}</div>
            {[+10, +20, +30, +40, +50, +60].map((value) =>(

            <button onClick= {() => setCounter(points + value)}>{value}</button> ))}
            
            <button onClick={collision}>Collision -5 </button>

        </>
        
    );
};

export default PointsCounter;

