import React, {useEffect, useState} from "react";
import "./App.css";
import Button from "./Components/Button";
import {Counter} from "./Components/Counter";
import {Settings} from "./Components/Settings";

const STEP = 1

const App = () => {
    const [counter, setCounter] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)

    const [isError, setIsError] = useState(false)
    const [set, setSet] = useState(true)


    const isDisabledReset = (counter <= startValue)
    const isDisabledInc = (counter === maxValue)

    const handlerIncrementClick = () => {
            setCounter(counter + STEP)
    }

    const handlerResetClick = () => {
        setCounter(startValue)
    }


    return (
        <div className="counter">
            <Counter counter={counter}
                     maxValue={maxValue}
                     startValue={startValue}
                     isError={isError}
                     set={set}
                     handlerIncrementClick={handlerIncrementClick}
                     handlerResetClick={handlerResetClick}
                     isDisabledReset={isDisabledReset}
                     isDisabledInc={isDisabledInc}
            />

        </div>
    )
}

export default App

{/* <div>
                <Button title={"Increment"} disable={isMax} callback={handleIncrementClick}/>
                <Button title={"Reset"} disable={isStart} callback={handleClick2}/>
            </div>
            <div>
                <Settings maxValue={maxValue}  startValue={startValue} setMaxValue={setMaxValue} setStartValue={setStartValue}/>
            </div>
             <div>
                <Button title={"Set"} callback={handleClick2} disable={counter === maxValue}/>
            </div>*/
}