import React, {useState} from "react";
import "./App.css";
import Button from "./Components/Button";
import {Counter} from "./Components/Counter";
import {Settings} from "./Components/Settings";

const App = () => {
    const maxValue = 5
    const maxStart = 0
    const step = 1

    const [counter, setCounter] = useState(maxStart)

    const setMax =  (counter === maxValue)

    const setStart = (counter === maxStart)

    const handleClick1 = () => {
        if (counter < maxValue) {
            setCounter(counter + step)
        }
    }

    const handleClick2 = () => {
        setCounter(maxStart)
    }

    const localSettings = () => {
        alert("Yo")
    }

    return (
        <div className="counter"> Counter
            <div><Counter counter={counter} maxValue={maxValue} /></div>
            <div>
                <Button title={"Increment"} disable={setMax} callback={handleClick1}/>
                <Button title={"Reset"} disable={setStart} callback={handleClick2}/>
            </div>
            <div>
                <Settings maxValue={maxValue} maxStart={maxStart}/>
            </div>
            <div>
                <Button title={"Set"} callback={localSettings} disable={counter === maxValue}/>
            </div>
        </div>
    )
}

export default App

