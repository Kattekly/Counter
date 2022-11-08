import React, {ChangeEvent} from 'react';

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
        <div className='settings-input'>
            <h4>{props.title}:</h4>
            <input className={props.error ? 'red' : ''} type="number" value={props.value} onChange={callbackHandler} />
        </div>
    );
};

export default SettingsInputNumber;