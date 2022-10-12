import React, {useState} from 'react';

type SettingsType = {
    maxValue: number
    maxStart: number
}

export const callBackMaxValue = (props: SettingsType, value: string) => {
let newValue = props.maxValue
}
const callBackMinValue= (props: SettingsType, value: string) => {
let newStart = props.maxStart
}


export const Settings = (props: SettingsType) => {
    const [value, setValue] = useState("")

    return (
        <div>
            <div>
                <span>Max value:</span>
                <input type={"number"} onChange= {() => {callBackMaxValue }} />
            </div>
            <div>
                <span>Start value:</span>
                <input type={"number"} />
            </div>
        </div>
    );
};
