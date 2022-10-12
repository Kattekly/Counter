import React, {useEffect, useState} from "react";
import "./App.css";
import Button from "./Components/Button";
import {Counter} from "./Components/Counter";
import {Settings} from "./Components/Settings";

const STEP = 1

const App = () => {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)

    const [counter, setCounter] = useState(startValue)


    const isMax = (counter === maxValue)
    const isStart = (counter === startValue)

    const handleIncrementClick = () => {
        if (counter < maxValue) {
            setCounter(counter + STEP)
        }
    }

    const handleClick2 = () => {
            setCounter(startValue)
    }


    return (
        <div className="counter"> Counter
            <div><Counter counter={counter} maxValue={maxValue}/></div>
            <div>
                <Button title={"Increment"} disable={isMax} callback={handleIncrementClick}/>
                <Button title={"Reset"} disable={isStart} callback={handleClick2}/>
            </div>
            <div>
                <Settings maxValue={maxValue}  startValue={startValue} setMaxValue={setMaxValue} setStartValue={setStartValue}/>
            </div>
             <div>
                <Button title={"Set"} callback={handleClick2} disable={counter === maxValue}/>
            </div>
        </div>
    )
}

export default App

