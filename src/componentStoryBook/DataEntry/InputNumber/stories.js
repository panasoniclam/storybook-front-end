import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text ,radios,object} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Basic from "./Basic";
import Size from "./Size";
import Formatter from "./Formatter";
import Decimal from "./Decimal";
import Disabled from "./Disabled";

const options = {
    Basic:"Basic",
    Size:"Size",
    Formatter:"Formatter",
    Disabled:"Disabled",
    Decimal:"Decimal",
     
}
storiesOf('Component   |  InputNumber'  ,module) 
    // .addDecorator(centered)

    .addDecorator(withKnobs)
    .add("basic",()=>{
        const value = radios("types",options);
        // const Object = object("object",options);
        switch(value){
            case "Basic":return <Basic/>;
            case "Size": return <Size/>;
            case "Formatter":  return <Formatter/>;
            case "Disabled": return <Disabled/>;
            case "Decimal": return <Decimal/>;
            default : break;

        }
        return "well come to fpt telecom"
    }
        
    ,{
        notes:'A simple very component'
    })
  