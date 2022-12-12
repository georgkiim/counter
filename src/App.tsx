import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Couner";
import SetForCounter from "./components/SetForCounter/SetForCounter";

function App() {
    const getMinValue = (minValue: number) => {
        let newLocalMin = localStorage.getItem('counterValueMin')
        if (newLocalMin) {
            const parsedValue = JSON.parse(newLocalMin);
            return parsedValue
        }
        return minValue
    }
    const getMaxValue = (maxValue: number) => {
        let newLocalMax = localStorage.getItem('counterValueMin')
        if (newLocalMax) {
            const parsedValue = JSON.parse(newLocalMax);
            return parsedValue
        }
        return maxValue
    }
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [error, setError] = useState(false)
    const [point, setPoint] = useState<number>(minValue)
    const [min, setMin] = useState(() => getMinValue(minValue))
    const [max, setMax] = useState(() => getMaxValue(maxValue))

    const addPoint = () => point < maxValue && setPoint(point + 1)
    const resetPoint = () => point > minValue && setPoint(minValue)
    const inputParameter = min !== max && min < max && min >= 0 && Number.isInteger(min)


    useEffect(() => {
        localStorage.setItem('counterValueMin', JSON.stringify(min))
    }, [min])
    useEffect(() => {
        localStorage.setItem('counterValueMax', JSON.stringify(max))
    }, [max])
    const buttonSet = () => {
        if (inputParameter) {
            setMinValue(min)
            setMaxValue(max)
            setPoint(min)
            setError(false)
        }
    }
    return (
        <div className='app'>
            <Counter maxValue={maxValue}
                     minValue={minValue}
                     point={point}
                     addPoint={addPoint}
                     resetPoint={resetPoint}
                     error={error}
                     setError={setError}
                     inputParameter={inputParameter}
            />
            <SetForCounter maxValue={maxValue}
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
        </div>
    )
}

export default App;
