import React from 'react'
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import './Countdwn.css'


export default function Countdwn() {
    const Completionist = () => <span>You are good to go!</span>;
    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
          return (<>
            <span className='hour'>{hours}:</span>
            <span className='minutes'>{minutes}:</span>
            <span className='seconds'>{seconds}</span>
        </>)
      }
    };
    return (
        <div>
         


  <Countdown
    date={Date.now() + 50000000}
    renderer={renderer}
  /> 

        </div>
  
    )
}