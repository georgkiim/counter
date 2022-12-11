import React, {ChangeEvent, useState} from "react";
import {Button} from "./Button";


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

type InputSetType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    inputParameter: boolean
    title: string
}

const InputSet = (props: InputSetType) => {
    return (
        <label className={'label'}>
            <span className={'inputLabel'}>MAXValue:</span>
            <input onChange={props.onChange}
                   type={'number'}
                   value={props.value}
                   className={props.inputParameter ? 'input' : 'error-input'}/>
        </label>
    )
}
