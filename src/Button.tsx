import React from "react";

type ButtonPropsType = {
    onClick: () => void
    buttonName: string
    classParameter: boolean

}
export const Button = (props: ButtonPropsType) => {
    return (
        <button className={props.classParameter ? 'error-button' : 'button'}
                onClick={props.onClick}>{props.buttonName}</button>

    )
}