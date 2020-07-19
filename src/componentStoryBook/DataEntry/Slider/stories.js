import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text ,radios} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component

import Basic from "./Basic";
import SliderWithIcon from "./SliderWithIcon";
import SliderWithNumber from "./SliderWithNumber";
import SliderWithDecimal from "./SliderWithDecimal";
import SliderCustomize from "./SliderCustomize";
import SliderEvent from "./SliderEvent";
import SliderGarduated from "./SliderGarduated";
import VerticalSlider from "./VerticalSlider";

const options = {
    Basic:'Basic',
    SliderWithIcon:'SliderWithIcon',
    SliderWithNumber:'SliderWithNumber',
    SliderWithDecimal:'SliderWithDecimal',
    SliderCustomize:'SliderCustomize',
    SliderEvent:'SliderEvent',
    SliderGarduated:'SliderGarduated',
    VerticalSlider:'VerticalSlider'
}
storiesOf('Component   |  Slider'  ,module) 
    .addDecorator(withKnobs)
    .add("basic",()=>{
        const value = radios("types",options);
        switch(value){
            case "Basic": return <Basic/>;
            case "SliderWithIcon": return <SliderWithIcon/>;
            case "SliderWithNumber": return <SliderWithNumber/>;
            case "SliderWithDecimal": return <SliderWithDecimal/>;
            case "SliderCustomize": return <SliderCustomize/>;
            case "SliderEvent": return <SliderEvent/>;
            case "SliderGarduated": return <SliderGarduated/>;
            case "VerticalSlider": return <VerticalSlider/>;
            default : break;

        }
        return 'well come to fpt telecom';
    },{
        notes:'A simple very component'
    })
  