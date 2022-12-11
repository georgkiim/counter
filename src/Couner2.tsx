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
    inputParameter:boolean
    setSetting:(h:boolean)=>void
}
const Counter2 = (props: CounterType) => {
    const isErrorInc = props.point === props.maxValue
    const isErrorReset = props.point === props.minValue
    return (
        <div>
            <div className={isErrorInc || props.error ? 'phone-error' : 'phone'}>
                { props.inputParameter&& <span className={props.error ? 'error-point' : 'point'}>
                    {props.error ? 'Please set the value' : props.point}
                </span>}
                {!props.inputParameter && <span className={'error-point-input'}>Incorrect VALUE!!!</span> }
            </div>
            <div className='bord-button'>
                <Button onClick={props.addPoint} buttonName={'Inc'} classParameter={isErrorInc}/>
                <Button onClick={props.resetPoint} buttonName={'Reset'} classParameter={isErrorReset}/>
                <Button onClick={()=>props.setSetting(false)} buttonName={'Set'} classParameter={false}/>
            </div>
        </div>
    )
}
export default Counter2


