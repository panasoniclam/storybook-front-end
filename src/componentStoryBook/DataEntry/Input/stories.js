import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Basic from "./Basic";
import ThreeSizesOfInput from "./ThreeSizesOfInput";
import PostTab from "./PostTab";
import SearchBox from "./SearchBox";
import InputGroups from "./InputGroups";
import AutosizingTheHeight from "./AutosizingTheHeight";
import TextArea from "./TextAreas";
import FormatTooltipInput from "./FormatTooltipInput";
const options = {
    Basic:"Basic",
    ThreeSizesOfInput:"ThreeSizesOfInput",
    PostTab:"PostTab",
    SearchBox:"SearchBox",
    InputGroups:"InputGroups",
    AutosizingTheHeight:"AutosizingTheHeight",
    TextArea:"TextArea",
    FormatTooltipInput:"FormatTooltipInput"
}
storiesOf('Component   |  Input'  ,module) 
 
    .addDecorator(withKnobs)
    .add("basic",()=> {
        const value = radios("types",options)
        switch(value){
            case "Basic":return <Basic/>;
            case "ThreeSizesOfInput": return <ThreeSizesOfInput/>;
            case "PostTab":  return <PostTab/>;
            case "SearchBox": return <SearchBox/>;
            case "InputGroups": return <InputGroups/>;
            case "AutosizingTheHeight": return <AutosizingTheHeight/>;
            case "TextArea": return <TextArea/>;
            case "FormatTooltipInput" : return <FormatTooltipInput/>;
            default : break;

        }
        return "well come to fpt telecom"

    },{
        notes:'A simple very component'
    })
  