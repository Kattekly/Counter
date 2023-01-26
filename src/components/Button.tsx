import React from 'react';

type buttonType = {
    title: string
    callback: () => void
    disabled: boolean
}

export const UniversalButton: React.FC<buttonType> = ({title,callback, disabled}) => {

    return (
        <button disabled={disabled} onClick={callback}>{title}</button>
    );
};