import React from 'react';
import SettingsInputNumber from "./SettingsInput";
import './Settings.css'
import {UniversalButton} from "../UniversalComponents/UniversalButton";

type SettingsType = {
    maxValue: number
    startValue: number
    isError: boolean
    startValueCallback: (value: number) => void
    maxValueCallback: (value: number) => void
    setValuesCallback: () => void
}


export const Settings = (props: SettingsType) => {

    const startValueHandler = (value: number) => {
        props.startValueCallback(value)
    }
    const maxValueHandler = (value: number) => {
        props.maxValueCallback(value)
    }

    const setValuesHandler = () => {
        props.setValuesCallback()
    }


    return (
        <>
            <div className="inputWrapper">
                <SettingsInputNumber error={props.isError} title="Max value" value={props.maxValue}
                                     callback={maxValueHandler}/>
                <SettingsInputNumber error={props.isError} title="Start value" value={props.startValue}
                                     callback={startValueHandler}/>
            </div>
            <div className="set">
                <UniversalButton title='Set' callback={setValuesHandler} disabled={props.isError}/>
            </div>
        </>
    );
};
