import React, {useState} from "react";
import "./App.css";
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

const STEP = 1
export const START_SETTINGS_VALUE = getValueLocalStorage('START_VALUE', 0)
export const MAX_SETTINGS_VALUE = getValueLocalStorage('MAX_VALUE', 5)


function getValueLocalStorage(key: string, defaultValue: number) {
    let value = defaultValue
    const valueStorage = localStorage.getItem(key)
    if (valueStorage !== null) value = JSON.parse(valueStorage)
    return value
}

function saveValuesCounter(key: string, value: number) {
    const localStorageValue = JSON.stringify(value)
    localStorage.setItem(key, localStorageValue)
}

const App = () => {
    const [counter, setCounter] = useState<number>(START_SETTINGS_VALUE)
    const [startValue, setStartValue] = useState<number>(START_SETTINGS_VALUE)
    const [maxValue, setMaxValue] = useState<number>(MAX_SETTINGS_VALUE)

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


    const maxValueCallback = (value: number) => {
        setMaxValue(value)
        setIsError(value <= startValue)
        setSet(true)
    }

    const startValueCallback = (value: number) => {
        setStartValue(value)
        setCounter(value)
        setIsError(value < 0 || value >= maxValue)
        setSet(true)

    }

    const setValuesCallback = () => {
        saveValuesCounter('START_VALUE', startValue)
        saveValuesCounter('MAX_VALUE', maxValue)
        setCounter(startValue)
        setSet(false)
    }


    return (
        <div className="App">
            <div className="counterWrapper">
                <div className="counter">
                    <Counter counter={counter}
                             maxValue={maxValue}
                             startValue={startValue}
                             isError={isError}
                             set={set}
                             handlerIncrementClick={handlerIncrementClick}
                             handlerResetClick={handlerResetClick}
                             isDisabledReset={isDisabledReset}
                             isDisabledInc={isDisabledInc}/>
                </div>
                <div className='settings'>
                    <Settings maxValue={maxValue}
                              startValue={startValue}
                              isError={isError}
                              startValueCallback={startValueCallback}
                              maxValueCallback={maxValueCallback}
                              setValuesCallback={setValuesCallback}/>

                </div>
            </div>
        </div>
    )
}

export default App