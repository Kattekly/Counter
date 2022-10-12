import React from 'react';

type CounterType = {
    counter: number
}

export const Counter = (props: CounterType) => {
    return (
        <div>
            {props.counter}
        </div>
    );
};

