import React from 'react';
import SettingsInputNumber from "./SettingsInput";
import './Settings.css'
import {UniversalButton} from "../UniversalComponents/UniversalButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/stor";
import {
    setDefaultMaxValueAC,
    setDefaultStartValueAC,
    setErrorIncorrectValueAC,
    setMaxValueAC,
    setNewOptionsAC,
    setStartValueAC
} from "../../redux/settings-reducer";
import {setCounterValueAC} from "../../redux/counter-reducer";



export const SettingsWithRedux: React.FC = () => {
    const dispatch = useDispatch()

    const startCounterValue = useSelector<AppRootStateType, number>(state => state.settings.startCounterValue)
    const maxCounterValue = useSelector<AppRootStateType, number>(state => state.settings.maxCounterValue)
    const defaultStartValue = useSelector<AppRootStateType, number>(state => state.settings.defaultStartValue)
    const defaultMaxValue = useSelector<AppRootStateType, number>(state => state.settings.defaultMaxValue)
    const hasError = useSelector<AppRootStateType, boolean>(state => state.settings.incorrectValue)

    const startValueHandler = (value: number) => {
        dispatch(setStartValueAC(value))
        dispatch(setErrorIncorrectValueAC( value < 0 || value >= maxCounterValue))
        dispatch(setNewOptionsAC(defaultStartValue !== value))
    }

    const maxValueHandler = (value: number) => {
        dispatch(setMaxValueAC(value))
        dispatch(setErrorIncorrectValueAC(value <= startCounterValue))
        dispatch(setNewOptionsAC(defaultMaxValue !== value))
    }

    const setSettingsHandler = () => {
        dispatch(setCounterValueAC(startCounterValue))
        dispatch(setDefaultStartValueAC(startCounterValue))
        dispatch(setDefaultMaxValueAC(maxCounterValue))
        dispatch(setNewOptionsAC(false))
    }

    return (
        <>
            <div className='input-wrapper'>
                <SettingsInputNumber error={hasError} title="Max value" value={maxCounterValue} callback={maxValueHandler}/>
                <SettingsInputNumber error={hasError} title="Start value" value={startCounterValue} callback={startValueHandler}/>
            </div>
            <div className='set'>
                <UniversalButton title='set' callback={setSettingsHandler} disabled={hasError}/>
            </div>
        </>
    );
};
