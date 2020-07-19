import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text ,radios} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Basic from "./Basic";
import TimePickerSize from "./TimePickerSize";
import Disabled from "./Disabled";
import IntervalOption from "./IntervalOption";
import Addon from "./Addon";
import Hour from "./Hour";
import HourMinute from "./HourMinute";
const options = {
    Basic:'Basic',
    TimePickerSize:'TimePickerSize',
    Disabled:'Disabled',
    IntervalOption:'IntervalOption',
    Addon:'Addon',
    Hour:'Hour',
    HourMinute:'HourMinute'
}
storiesOf('Component   |  TimePicker'  ,module) 
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=>{
        const value = radios("types",options);
        switch(value){
          case "Basic": return <Basic/>;
          case "TimePickerSize": return <TimePickerSize/>;
          case "Disabled": return <Disabled/>;
          case "IntervalOption": return <IntervalOption/>;
          case "Addon": return <Addon/>;
          case "Hour": return <Hour/>;
          case "HourMinute": return <HourMinute/>;
          default : break;
        }
      return 'well come to fpt telecom';
  },{
        notes:'A simple very component'
    })
  