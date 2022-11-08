import React from 'react';

type CounterType = {
    counter: number
    maxValue: number
    startValue: number
    isError: boolean
    set: boolean
    handlerIncrementClick: () => void
    handlerResetClick: () => void
    isDisabledReset: boolean
    isDisabledInc: boolean
}


export const Counter = (props: CounterType) => {
    return (
        <div className={props.counter === props.maxValue ? "maxValue" : ""}>
            {props.counter}
        </div>
    );
};

