import React, {useState} from 'react';
import './App.css';
import Counter from "./Couner";
import SetForCounter from "./SetForCounter";

function App() {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [error, setError] = useState(false)
    const [min, setMin] = useState(minValue)
    const [max, setMax] = useState(maxValue)
    const [point, setPoint] = useState<number>(minValue)
    const addPoint = () => point < maxValue && setPoint(point + 1)
    const resetPoint = () => point > minValue && setPoint(minValue)
    const inputParameter = min !== max && min < max && min >= 0 && Number.isInteger(min)
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
