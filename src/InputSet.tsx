import React, {ChangeEvent} from "react";

type InputSetType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    inputParameter: boolean
    title: string
}
export const InputSet = (props: InputSetType) => {
    return (
        <label className={'label'}>
            <span className={'inputLabel'}>{props.title}</span>
            <input onChange={props.onChange}
                   type={'number'}
                   value={props.value}
                   className={props.inputParameter ? 'input' : 'error-input'}/>
        </label>
    )
}