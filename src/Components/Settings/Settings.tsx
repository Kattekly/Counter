import React, {KeyboardEvent} from 'react';
import Button from "../Button";
import SettingsInputNumber from "./SettingsInput";
import './Settings.css'

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
    const maxValueHandler = (value: number ) => {
        props.maxValueCallback(value)
    }

    const setValuesHandler = () => {
        props.setValuesCallback()
    }



    return (
        <>
            <div className="inputWrapper">
                <SettingsInputNumber error={props.isError} title="Max value" value={props.maxValue} callback={maxValueHandler} />
                <SettingsInputNumber error={props.isError} title="Start value" value={props.startValue} callback={startValueHandler}/>
            </div>
            <div className="set">
                <Button title='Set' callback={setValuesHandler} disable={props.isError}/>
            </div>
        </>
    );
};
