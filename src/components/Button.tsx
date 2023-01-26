import React from 'react';

type buttonType = {
    title: string
    callback: () => void
    disable: boolean
}

const Button = (props: buttonType) => {
    return (
        <button disabled={props.disable} onClick={props.callback}>{props.title}</button>
    );
};

export default Button;