import React from "react";
import s from './Button.module.css'

type ButtonPropsType = {
    onClick: () => void
    buttonName: string
    classParameter: boolean
}
export const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button className={props.classParameter ? s.opacity : s.button}
                    onClick={props.onClick}>{props.buttonName}
            </button>
        </div>
    )
}
