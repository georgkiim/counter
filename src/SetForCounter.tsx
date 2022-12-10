import React, {useState} from "react";
import {Button} from "./Button";


type CounterType = {}


const SetForCounter = (props: CounterType) => {

    return (
        <div>
            <div className={'phone'} >
                <label className={'label'}>
                    <span>1</span>
                    <input className={'input'}/>
                </label>

            </div>

            <div className='bord-button'>


            </div>
        </div>
    )
}
export default SetForCounter


