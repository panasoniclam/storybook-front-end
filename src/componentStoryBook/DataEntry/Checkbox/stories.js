import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Basic from "./Basic";
import Disabled from "./Disabled";
import ControlledCheckbox from "./ControlledCheckbox";
import CheckboxGroups from "./CheckboxGroups";
import UseWithGrid from "./UseWithGrid";
import CheckAll from "./CheckAll";
const options = {
    Basic:"Basic",
    Disabled:"Disabled",
    ControlledCheckbox:"ControlledCheckbox",
    CheckboxGroups:"CheckboxGroups",
    UseWithGrid:"UseWithGrid",
    CheckAll:"CheckAll"
}
storiesOf('Component   |  Checkbox'  ,module) 
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=>{
        const value = radios("types",options)
        switch(value){
            case "Basic":
                return(
                    <Basic/>
                )
            case "Disabled":
                return(
                    <Disabled/>
                )
            case "ControlledCheckbox":
                return <ControlledCheckbox/>
            case "CheckboxGroups":
                return <CheckboxGroups/>
            case "UseWithGrid":
                return <UseWithGrid/>
            case "CheckAll":
                return <CheckAll/>
            default:break;
        }
        return "well come to fpt"
   
    },{
        notes:'A simple very component'
    })
  