import React, {useState} from 'react';
import './App.css';
import Counter from "./Couner";
import SetForCounter from "./SetForCounter";

function App() {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [point, setPoint] = useState<number>(minValue)
    const addPoint = () => point < maxValue && setPoint(point + 1)
    const resetPoint = () => point > minValue && setPoint(minValue)
    return (
        <div className='app'>


            <Counter maxValue={maxValue}
                     minValue={minValue}
                     point={point}
                     addPoint={addPoint}
                     resetPoint={resetPoint}
            />


            <SetForCounter/>

        </div>

    )
}

export default App;
