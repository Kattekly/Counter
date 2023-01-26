import React from 'react';
import {MAX_SETTINGS_VALUE, START_SETTINGS_VALUE} from "../../App";

import './Counter.css'
import Button from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/stor";

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
    const dispatch = useDispatch()
    const counterValue = useSelector<AppRootStateType, number>(state => state.counter.counterValue)
    const startCounterValue = useSelector<AppRootStateType, number>(state => state.settings.startCounterValue)
    const maxCounterValue = useSelector<AppRootStateType, number>(state => state.settings.maxCounterValue)
    const hasErrorValue = useSelector<AppRootStateType, boolean>(state => state.settings.incorrectValue)
    const hasSetValue = useSelector<AppRootStateType, boolean>(state => state.settings.savedNewOptions)
    const defaultStartValue = useSelector<AppRootStateType, number>(state => state.settings.defaultStartValue)
    const defaultMaxValue = useSelector<AppRootStateType, number>(state => state.settings.defaultMaxValue)



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

