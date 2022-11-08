import React, {ChangeEvent, useEffect, useState} from 'react';

type SettingsType = {
    maxValue: number
    startValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
}


export const Settings = (props: SettingsType) => {

    const callBackMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
            props.setMaxValue(Number(e.currentTarget.value))
    }


   /* if (props.maxValue > (Number(e.currentTarget.value))) {
        props.setMaxValue(Number(e.currentTarget.value))
    } else return ("Incorrect")*/

    const callBackMinValue = (e: ChangeEvent<HTMLInputElement>) => {

        props.setStartValue(Number(e.currentTarget.value))
    }

    const onClickSet = () => {
       //set to LS
    }

    return (
        <div>
            <div>
                <span>Max value:</span>
                <input type={"number"} value={props.maxValue} onChange={callBackMaxValue}/>
            </div>
            <div>
                <span>Start value:</span>
                <input type={"number"} value={props.startValue} onChange={callBackMinValue}/>
            </div>
            {/*<button onClick={() => onClickSet}>Set</button>*/}
        </div>
    );
};
