import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component



import Basic from "./Basic";
import Accordion from "./Accordion";
import NestedPanel from "./NestedPanel";
import Borderless from "./Borderless";
import CustomPanel from "./CustomPanel";
import NoArrow from "./NoArrow";
const options = {
    Basic:"Basic",
    Accordion:"Accordion",
    NestedPanel:"NestedPanel",
    Borderless:"Borderless",
    CustomPanel:"CustomPanel",
    NoArrow:"NoArrow",
    
}

storiesOf('Component   | Collapse '  ,module) 
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=> {
        const value = radios("types",options)
        switch(value){
            case "Basic":
            return(
               <Basic/>
            )
            case "Accordion":
                return(
                    <Accordion/>
                )
            case "NestedPanel":
                return(
                    <NestedPanel/>
                )
            case "Borderless":
                return(
                    <Borderless/>
                )
            case "CustomPanel":
                return(
                    <CustomPanel/>
                )
            case "NoArrow":
                return(
                    < NoArrow/>
                );
            default :
            break;
        }
        return "well come to fpt telecom"
    },{
        notes:'A simple very component'
    })