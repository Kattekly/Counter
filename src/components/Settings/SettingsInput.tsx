import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './Settings.css'

type InputNumberPropsType = {
    error: boolean
    title: string
    value: number
    callback: (value: number) => void
}

const SettingsInputNumber: React.FC<InputNumberPropsType> = (props) => {

    const callbackHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(isNaN(e.currentTarget.valueAsNumber) ? 0 : Math.trunc(e.currentTarget.valueAsNumber))
        //trunc - чтобы не происходило округления после запятой в большую сторону при вызове в инпуте toFixed()
        //toFixed() - чтобы при вводе чисел зачищался начальный ноль
    }


    return (
        <div className="settingsInput">
            <h4>{props.title}:</h4>
            <input className={props.error ? 'red' : ''} type="number" value={props.value.toFixed()}
                   onChange={callbackHandler}/>
        </div>
    );
};

export default SettingsInputNumber;