import React, {useState} from "react";
import {Button} from "../Button/Button";
import s from "./Counter.module.css";
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
    const isErrorInc = props.error || !props.inputParameter || props.point === props.maxValue
    const isErrorReset = props.error || !props.inputParameter || props.point === props.minValue
    return (
        <div className={s.counter}>
            <div className={isErrorInc || props.error ? s.red : s.count}>
                {props.inputParameter && <span className={props.error ? s.text : ''}>
                    {props.error ? 'Please set the value' : props.point}
                </span>}
                {!props.inputParameter && <div className={s.error}>Incorrect VALUE!!!</div>}
            </div>
            <div className={s.wrapper}>
                <Button onClick={props.addPoint} buttonName={'Inc'} classParameter={isErrorInc}/>
                <Button onClick={props.resetPoint} buttonName={'Reset'} classParameter={isErrorReset}/>
                <Button onClick={()=>props.setSetting(false)} buttonName={'Set'} classParameter={false}/>
            </div>
        </div>
    )
}
export default Counter2


