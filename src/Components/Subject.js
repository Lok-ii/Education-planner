import { useState } from "react";
import "./subject.css";

export default function Subject(props){
    const [hours, setCurrentHours] = useState(props.hour);

    const incrementHour = ()=>{
        setCurrentHours(Number(hours) + 1);
    }
    const decrementHour = ()=>{
        if(Number(hours) > 0){
            setCurrentHours(Number(hours) - 1);
        }
    }
    return(
        <div className="subject">
            <span className="subjectName">{props.subject} - </span> 
            <span className="subjectHours"> {hours} hours</span>
            <div className="buttons">
                <button className="positive" onClick={incrementHour}>+</button>
                <button className="negative" onClick={decrementHour}>-</button>
            </div>
        </div>
    );
}