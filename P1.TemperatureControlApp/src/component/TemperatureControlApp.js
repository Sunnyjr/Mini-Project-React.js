import React, {useState} from 'react';
import './TemperatureControlApp.scss';


function TemperatureControlApp() {

    //step 2 define state 
    const [temperature , setTemperature] = useState(10);
    const [ temperatureColor, setTemperatureColor] = useState('cold')
    const [massage , setMessage] = useState('Temperature is Cold')

    const onIncreaseTemp = () =>{
        const temp = temperature + 1;
        if(temp >= 25){
            setTemperatureColor('hot')
            setMessage("Temperature is Hot.")
        }
        setTemperature(temp)        
    }
    const onDecreaseTemp = () =>{
        const tem = temperature - 1;
        if(tem <= 25){
            setTemperatureColor('cold')
            setMessage("Temperature is Cold.")
        }
        setTemperature(tem)
    }

    return (
        // step1 create stucture 
        <div className="container"> 
        <div className="TemperatureControl">{massage}
            <div className="card-container">
                <div className={`tempdesplay ${temperatureColor}`}>{temperature}*c</div>
            </div>
            <div className="button-container">
                <button onClick={() =>onIncreaseTemp()}> + </button> 
                <button id="btn2" onClick={() =>onDecreaseTemp()}> - </button>
            </div>
        </div>
        </div>
    );
}

export default TemperatureControlApp;