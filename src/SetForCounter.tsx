import React, {ChangeEvent} from "react";
import {Button} from "./Button";
import {InputSet} from "./InputSet";


type CounterType = {
    maxValue: number
    minValue: number
    min: number
    max: number
    setMin: (min: number) => void
    setMax: (max: number) => void
    setMinValue: (min: number) => void
    setMaxValue: (max: number) => void
    setPoint: (val: number) => void
    buttonSet: () => void
    setError: (h: boolean) => void
    inputParameter: boolean
}
const SetForCounter = (props: CounterType) => {
    const onInputMinChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMin(e.currentTarget.valueAsNumber)
        props.setError(true)
    }
    const onInputMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMax(e.currentTarget.valueAsNumber)
        props.setError(true)
    }
    return (
        <div>
            <div className={'phone'}>
                <InputSet title={'MINValue:'}
                          onChange={onInputMinChange}
                          value={props.min}
                          inputParameter={props.inputParameter}/>
                <InputSet title={'MAXValue:'}
                          onChange={onInputMaxChange}
                          value={props.max}
                          inputParameter={props.inputParameter}/>
            </div>
            <div className='bord-button'>
                <Button onClick={props.buttonSet} buttonName={'Set'} classParameter={!props.inputParameter}/>
            </div>
        </div>
    )
}
export default SetForCounter

