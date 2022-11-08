import React, {} from 'react';
import Button from "../Button";
import SettingsInputNumber from "./SettingsInput";

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
            <div className='input-wrapper'>
                <SettingsInputNumber error={props.isError} title={String(props.maxValue)} value={props.maxValue} callback={maxValueHandler}/>
                <SettingsInputNumber error={props.isError} title={String(props.startValue)} value={props.startValue} callback={startValueHandler}/>
            </div>
            <div className='set'>
                <Button title='set' callback={setValuesHandler} disable={props.isError}/>
            </div>
        </>
    );
};
