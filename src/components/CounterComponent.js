import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {increment,decrement,reset} from "../actions/counterAction";

const CounterComponent = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleDecrement = () =>{
        dispatch(decrement());

    }
    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleReset = () => {
        dispatch(reset());
    }

    
    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default CounterComponent;