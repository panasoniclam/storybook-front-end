import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Basic from "./Basic";
import DateFormat from "./DateFormat";
import ThreeSizes from "./ThreeSizes";
import ChooseTime from "./ChooseTime";
import Disabled from "./Disabled";
import PresettedRanges from "./PresettedRanges";
import CustomizedRangePicker from "./CustomizedRangePicker";
import ControlledPanels from "./ControlledPanels";
import ExtraFooter from "./ExtraFooter";
import CustomizedDateRendering from "./CustomizedDateRendering";
const options = {
    Basic:"Basic",
    DateFormat:"DateFormat",
    ThreeSizes:"ThreeSizes",
    ChooseTime:"ChooseTime",
    Disabled:"Disabled",
    PresettedRanges:"PresettedRanges",
    CustomizedRangePicker:"CustomizedRangePicker",
    ControlledPanels:"ControlledPanels",
    ExtraFooter:"ExtraFooter",
    CustomizedDateRendering:"CustomizedDateRendering"
}
storiesOf('Component   |  DatePicker'  ,module) 
    // .addDecorator(centered)
     .addDecorator(withKnobs)
    .add("basic",()=>{
       const value = radios("types",options);
       switch(value){
           case "Basic": return <Basic/>;
           case "DateFormat" : return <DateFormat/>;
           case "ThreeSizes" : return <ThreeSizes/>;
           case "ChooseTime" : return <ChooseTime/>;
           case "Disabled"   : return <Disabled/>;
           case "PresettedRanges" : return <PresettedRanges/>;
           case "CustomizedRangePicker": return <CustomizedRangePicker/>;
           case "ControlledPanels": return <ControlledPanels/>;
           case "ExtraFooter" : return <ExtraFooter/>;
           case "CustomizedDateRendering" : return<CustomizedDateRendering/>
           default:break;
       }
       return "well come to fpt telecom"
    }
    ,{
        notes:'A simple very component'
    })
  