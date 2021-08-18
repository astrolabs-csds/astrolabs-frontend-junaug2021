import { useState } from 'react';

const CounterButton = () => {

    const [state, setState] =  [0, function () {}]

    function increment() {
        setState(state + 1);
    }
    
    return(
        <button onClick={increment} className="btn btn-primary">{state}</button>
    )
}

export default CounterButton;