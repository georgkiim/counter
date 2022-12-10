import React, {useState} from "react";
import {Button} from "./Button";


const Counter = () => {
    const minValue = 0;
    const maxValue = 5;
    const [point, setPoint] = useState<number>(minValue)
    const addPoint = () => {
        if(point<maxValue) {
            setPoint(point+1)
        }
    }
    const resetPoint = () =>{
        setPoint(minValue)

    }
    const isErrorInc = point === maxValue
    const isErrorReset = point===minValue
    return (
        <div>
            <h1 className={isErrorInc?'phone-error':'phone'}>{point}</h1>
            <div className='bord-button'>
                <Button onClick={addPoint} buttonName={'Inc'} classParameter={isErrorInc} />
                <Button onClick={resetPoint} buttonName={'Reset'} classParameter={isErrorReset}/>
            </div>
        </div>
    )
}
export default Counter

