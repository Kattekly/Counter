import React from 'react';

type CounterType = {
    counter: number
    maxValue: number
}

export const Counter = (props: CounterType) => {
    return (
        <div className={props.counter === props.maxValue ? "maxValue" : ""}>
            {props.counter}
        </div>
    );
};

