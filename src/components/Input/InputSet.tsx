import React, {ChangeEvent} from "react";
import s from './input.module.css'

type InputSetType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    inputParameter: boolean
    title: string
}
export const InputSet = (props: InputSetType) => {
    return (
        <div className={s.valueSettings}>
            <div className={s.text}>{props.title}</div>
            <input onChange={props.onChange}
                   type={'number'}
                   value={props.value}
                   className={props.inputParameter ? s.input : s.error}/>
        </div>
    )
}