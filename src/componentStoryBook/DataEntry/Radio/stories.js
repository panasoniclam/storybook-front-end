import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text ,radios} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Basic from "./Basic";
import Disabled from "./Disabled";
import HorizontalRadio from "./HorizontalRadio";
import VerticalRadio from "./VerticalRadio";
import OptionalRadio from "./OptionalRadio";
import StyleRadio from "./StyleRadio";
import SizeRadio from "./SizeRadio";
const options = {
    Basic:"Basic",
    Disabled:"Disabled",
    HorizontalRadio:"HorizontalRadio",
    VerticalRadio:'VerticalRadio',
    OptionalRadio:'OptionalRadio',
    StyleRadio:'StyleRadio',
    SizeRadio:'SizeRadio'
}
storiesOf('Component   |  Radio'  ,module) 
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=> {
        const value = radios("types",options)
        switch(value){
            case "Basic": return <Basic/>;
            case "Disabled" : return <Disabled/>;
            case "HorizontalRadio" : return <HorizontalRadio/>;
            case "VerticalRadio": return  <VerticalRadio/>;
            case "OptionalRadio": return <OptionalRadio/>;
            case "StyleRadio": return <StyleRadio/>;
            case "SizeRadio": return <SizeRadio/>;
            default :
            break;
        }
        return 'well come to fpt telecom'
    },{
        notes:'A simple very component'
    })
  