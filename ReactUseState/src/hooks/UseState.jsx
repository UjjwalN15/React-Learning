import {useState} from "react";

export const ReactUseState = ()=>{
    // let [array, setArray] = useState(0);
    // const handleIncrement = () => {
    //     setArray(()=>array+1);
    // };
    // return (
    //     <>
    //         <h1>{array}</h1>
    //         <button onClick={handleIncrement}>Increment By clicking</button>
    //     </>
    // );
    let [array, setArray] = useState(0);
    const handleIncrement = () => {
        setArray(()=>array+1)
    };
    return (
        <>
            <h1>{array}</h1>
            <button onClick={handleIncrement}>Increment By clicking</button>
        </>
    );
}

