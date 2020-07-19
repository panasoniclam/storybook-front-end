import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
 
import "./index.less";
import Basic from "./Basic";
import Vertical from "./Vertical";
import FadeIn from "./FadeIn";
import ScrollAutomatically from "./ScrollAutomatically";
const options = {
    basic:"basic",
    vertical:"vertical",
    fadeIn:"fadein",
    scrollAutomatically:"scrollAutomatically"
}

storiesOf('Component   | Carousel '  ,module) 
    .addDecorator(withKnobs)
    .add("basic",()=> {
        const value = radios("types",options);
        switch(value){
            case "basic":
                return(
                    <Basic/>
                )
            case "vertical":
                return(
                    <Vertical/>
                )
            case "fadein":
                return(
                    <FadeIn/>
                )
            case "scrollAutomatically":
                return(
                    <ScrollAutomatically/>
                )
            default : break;
        }
        return "wellcome to fpt telecom"
    },{
        notes:'A simple very component'
    })