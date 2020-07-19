import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Basic from "./Basic";
import HalfStar from "./HalfStar";
import ShowCopywrite from "./ShowCopywrite";
import ReadOnly from "./ReadOnly";
import ClearStar from "./ClearStar";
import OtherCharactor from "./OtherCharactor";

const options = {
    Basic:'Basic',
    HalfStar:'HalfStar',
    ShowCopywrite:'ShowCopywrite',
    ReadOnly:'ReadOnly',
    ClearStar:'ClearStar',
    OtherCharactor:'OtherCharactor'
}
storiesOf('Component   |  Rate'  ,module) 
 
    .addDecorator(withKnobs)
    .add("basic",()=>{
        const value = radios("types",options);
        switch(value){
            case "Basic": return <Basic/>;
            case "HalfStar": return <HalfStar/>;
            case "ShowCopywrite": return <ShowCopywrite/>;
            case "ReadOnly": return <ReadOnly/>;
            case "ClearStar": return <ClearStar/>;
            case "OtherCharactor": return <OtherCharactor/>;
            default : break;

        }
        return 'well come to fpt telecom';
    },{
        notes:'A simple very component'
    })
  