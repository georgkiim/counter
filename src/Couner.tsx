import React, {useState} from "react";
import {Button} from "./Button";

type CounterType = {
    maxValue: number
    minValue: number
    point: number
    addPoint: () => void
    resetPoint: () => void
    error: boolean
    setError: (h: boolean) => void
    inputParameter: boolean
}
const Counter = (props: CounterType) => {
    const isErrorInc = props.error || !props.inputParameter || props.point === props.maxValue
    const isErrorReset = props.error || !props.inputParameter || props.point === props.minValue
    return (
        <div>
            <div className={isErrorInc || props.error ? 'phone-error' : 'phone'}>
                {props.inputParameter && <span className={props.error ? 'error-point' : 'point'}>
                    {props.error ? 'Please set the value' : props.point}
                </span>}
                {!props.inputParameter && <span className={'error-point-input'}>Incorrect VALUE!!!</span>}
            </div>
            <div className='bord-button'>
                <Button onClick={props.addPoint} buttonName={'Inc'} classParameter={isErrorInc}/>
                <Button onClick={props.resetPoint} buttonName={'Reset'} classParameter={isErrorReset}/>

            </div>
        </div>
    )
}
export default Counter


