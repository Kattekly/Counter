import React from 'react';

type buttonType = {
    title: string
    callback: () => void
    disable: boolean
}

const Button = (props: buttonType) => {
    return (
        <button className={props.title === "Increment" ? "button1" : "button2"}
                disabled={props.disable}
                onClick={props.callback}>{props.title}</button>
    );
};

export default Button;