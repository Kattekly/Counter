import React, {useState} from "react";
import "./App.css";
import Button from "./Components/Button";

const App = () => {
    const maxValue = 5
    const maxStart = 0
    const step = 1

    const [counter, setCounter] = useState(maxStart)

    const handleClick1 = () => {
        if (counter < maxValue) {
            setCounter(counter + step)
        }
    }

    const handleClick2 = () => {
        setCounter(maxStart)
    }

    return (
        <div className="counter"> Counter
            <div>{counter}</div>
            <div>
                <Button title={"Increment"} disable={counter === maxValue} callback={handleClick1}/>
                <Button title={"Reset"} disable={counter === maxStart} callback={handleClick2}/>
            </div>
        </div>
    )
}

export default App

