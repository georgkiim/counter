import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Couner";
import Counter2 from './components/Counter/Couner2';
import SetForCounter from "./components/SetForCounter/SetForCounter";
import SetForCounter2 from './components/SetForCounter/SetForCounter2';

function App() {
    let newLocalMinValue = localStorage.getItem('counterValueMinValue')
    let newLocalMaxValue = localStorage.getItem('counterValueMaxValue')
    const [minValue, setMinValue] = useState(newLocalMinValue ? +newLocalMinValue : 0);
    const [maxValue, setMaxValue] = useState(newLocalMaxValue ? +newLocalMaxValue : 0);
    const [error, setError] = useState(false)
    const [point, setPoint] = useState<number>(minValue)
    const [setting, setSetting] = useState(true)
    const addPoint = () => point < maxValue && setPoint(point + 1)
    const resetPoint = () => point > minValue && setPoint(minValue)
    let newLocalMin = localStorage.getItem('counterValueMin')
    let newLocalMax = localStorage.getItem('counterValueMax')
    const [min, setMin] = useState(newLocalMin ? +newLocalMin : minValue)
    const [max, setMax] = useState(newLocalMax ? +newLocalMax : maxValue)
    const inputParameter = min !== max && min < max && min >= 0 && Number.isInteger(min)

    useEffect(() => {
        localStorage.setItem('counterValueMin', JSON.stringify(min))
    }, [min])

    useEffect(() => {
        localStorage.setItem('counterValueMax', JSON.stringify(max))
    }, [max])

    useEffect(() => {
        localStorage.setItem('counterValueMinValue', JSON.stringify(minValue))
    }, [minValue])

    useEffect(() => {
        localStorage.setItem('counterValueMaxValue', JSON.stringify(maxValue))
    }, [maxValue])

    const buttonSet = () => {
        if (inputParameter) {
            setMinValue(min)
            setMaxValue(max)
            setPoint(min)
            setError(false)
            setSetting(true)
        }
    }

    return (
        <div className='app'>
            {setting ? <Counter2 maxValue={maxValue}
                                 minValue={minValue}
                                 point={point}
                                 addPoint={addPoint}
                                 resetPoint={resetPoint}
                                 error={error}
                                 setError={setError}
                                 inputParameter={inputParameter}
                                 setSetting={setSetting}


                />
                : <SetForCounter2 maxValue={maxValue}
                                  minValue={minValue}
                                  setMinValue={setMinValue}
                                  setMaxValue={setMaxValue}
                                  setPoint={setPoint}
                                  min={min}
                                  max={max}
                                  setMin={setMin}
                                  setMax={setMax}
                                  buttonSet={buttonSet}
                                  setError={setError}
                                  inputParameter={inputParameter}
                />
            }

        </div>
    )
}

export default App;
