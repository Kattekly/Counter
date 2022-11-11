import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './Settings.css'

type InputNumberPropsType = {
    error: boolean
    title: string
    value: number
    callback: (value: number) => void
}

const SettingsInputNumber = (props: InputNumberPropsType) => {

    const callbackHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        props.callback(Number(e.target.value))
    }


    return (
        <div className="settingsInput">
            <h4>{props.title}:</h4>
            <input className={props.error ? 'red' : ''} type="number" value={props.value.toFixed()} onChange={callbackHandler}/>
        </div>
    );
};

export default SettingsInputNumber;