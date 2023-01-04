import React from 'react';
import {MAX_SETTINGS_VALUE, START_SETTINGS_VALUE} from "../../App";
import Button from "../Button";
import './Counter.css'

type CounterType = {
    counter: number
    maxValue: number
    startValue: number
    isError: boolean
    set: boolean
    handlerIncrementClick: () => void
    handlerResetClick: () => void
    isDisabledReset: boolean
    isDisabledInc: boolean
}


export const Counter = (props: CounterType) => {
    const fullValueStyle = props.counter === props.maxValue ? 'red' : ""


    const incorrectValue = props.startValue === props.maxValue || props.isError
    const isDifferentValues = (props.startValue !== START_SETTINGS_VALUE || props.maxValue !== MAX_SETTINGS_VALUE) && props.set

    return (
        <div className="buttons">
            {incorrectValue
                ? <h2 className="error">Incorrect value</h2>
                : isDifferentValues
                    ? <h2 className="hasSet">Enter values and press 'set'</h2>
                    : <h2 className={fullValueStyle}>{props.counter}</h2>}
            <div className="buttonsWrapper">
                <Button title='Inc'
                        callback={props.handlerIncrementClick}
                        disable={props.isError ? props.isError : props.isDisabledInc}/>
                <Button title='Reset'
                        callback={props.handlerResetClick}
                        disable={props.isError ? props.isDisabledReset : props.isDisabledReset}/>
            </div>
        </div>

    );
};

