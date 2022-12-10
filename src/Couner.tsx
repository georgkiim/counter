import React, {useState} from "react";
import {Button} from "./Button";


type CounterType={
    maxValue:number
    minValue:number
    point:number
    addPoint:()=>void
    resetPoint:()=>void
}


const Counter = (props:CounterType) => {
    const isErrorInc = props.point === props.maxValue
    const isErrorReset = props.point === props.minValue
    return (
        <div>
            <div className={isErrorInc ? 'phone-error' : 'phone'}>
                <span className={'point'}>{props.point}</span>
            </div>

            <div className='bord-button'>
                <Button onClick={props.addPoint} buttonName={'Inc'} classParameter={isErrorInc}/>
                <Button onClick={props.resetPoint} buttonName={'Reset'} classParameter={isErrorReset}/>
            </div>
        </div>
    )
}
export default Counter


