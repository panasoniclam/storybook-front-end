import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text ,radios} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Basic from "./Basic";
import SwitchDisabled from "./SwitchDisabled";
import SwitchTextIcon from "./SwitchTextIcon";
import SwitchSize from "./SwitchSize";
import SwitchLoading from "./SwitchLoading";
const options = {
    Basic:'Basic',
    SwitchDisabled:'SwitchDisabled',
    SwitchTextIcon:'SwitchTextIcon',
    SwitchSize:'SwitchSize',
    SwitchLoading:'SwitchLoading'
}
storiesOf('Component   |  Switches'  ,module) 
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=>{
      const value = radios("types",options);
    switch(value){
        case "Basic": return <Basic/>;
        case "SwitchDisabled": return <SwitchDisabled/>;
        case "SwitchTextIcon": return <SwitchTextIcon/>;
        case "SwitchSize": return <SwitchSize/>;
        case "SwitchLoading": return <SwitchLoading/>;
        default : break;
    }
    return 'well come to fpt telecom';
},{
        notes:'A simple very component'
    })
  