import React from 'react';
import './Counter.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/stor";
import {setCounterValueAC} from "../../redux/counter-reducer";
import {UniversalButton} from "../UniversalComponents/UniversalButton";

export const CounterWithRedux: React.FC = () => {
    const dispatch = useDispatch()

    const counterValue = useSelector<AppRootStateType, number>(state => state.counter.counterValue)
    const startCounterValue = useSelector<AppRootStateType, number>(state => state.settings.startCounterValue)
    const maxCounterValue = useSelector<AppRootStateType, number>(state => state.settings.maxCounterValue)
    const hasErrorValue = useSelector<AppRootStateType, boolean>(state => state.settings.incorrectValue)
    const hasSetValue = useSelector<AppRootStateType, boolean>(state => state.settings.savedNewOptions)
    const defaultStartValue = useSelector<AppRootStateType, number>(state => state.settings.defaultStartValue)
    const defaultMaxValue = useSelector<AppRootStateType, number>(state => state.settings.defaultMaxValue)

    const isDisabledReset = counterValue <= startCounterValue || hasSetValue
    const isDisabledInc = counterValue === maxCounterValue || hasSetValue


    const setCounterCallback = () => {
        dispatch(setCounterValueAC(counterValue + 1))
    }
    const resetCallback = () => dispatch(setCounterValueAC(startCounterValue))

    const fullValueClass = counterValue === maxCounterValue ? 'red' : ''
    const isDifferentValues = (startCounterValue !== defaultStartValue || maxCounterValue !== defaultMaxValue) && hasSetValue
    const isIncorrectValue = startCounterValue === maxCounterValue || hasErrorValue

    return (
        <div className="buttons">
            {isIncorrectValue
                ? <h2 className='error'>Incorrect value</h2>
                : isDifferentValues
                    ? <h2 className='hasSet'>Enter values and press 'set'</h2>
                    : <h2 className={fullValueClass}>{counterValue}</h2>}
            <div className='buttons-wrapper'>
                <UniversalButton
                    title='inc'
                    callback={setCounterCallback}
                    disabled={hasErrorValue ? hasErrorValue : isDisabledInc}/>
                <UniversalButton
                    title='reset'
                    callback={resetCallback}
                    disabled={hasErrorValue ? isDisabledReset : isDisabledReset}/>
            </div>
        </div>
    );
};

