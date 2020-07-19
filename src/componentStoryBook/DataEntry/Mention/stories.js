import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text ,radios} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Basic from "./Basic";
import Placement from "./Placement";
import AsynchronousLoading from "./AsynchronousLoading";
import CustomizeSuggestions from "./CustomizeSuggestions";
import IconImage from "./IconImage";
import Controlled from "./Controlled";
import MultilineMode from "./MultilineMode";
import SuggestionContainer from "./SuggestionContainer";
import Disabled from "./Disabled";
const options = {
    Basic:"Basic",
    Placement:"Placement",
    AsynchronousLoading:"AsynchronousLoading",
    CustomizeSuggestions:"CustomizeSuggestions",
    IconImage:"IconImage",
    Controlled:"Controlled",
    MultilineMode:"MultilineMode",
    SuggestionContainer:"SuggestionContainer"
     
}
storiesOf('Component   |  Mention'  ,module) 
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=>{
        const value = radios("types",options)
        switch(value){
            case "Basic":return <Basic/>;
            case "Placement": return <Placement/>;
            case "AsynchronousLoading":  return <AsynchronousLoading/>;
            case "CustomizeSuggestions": return <CustomizeSuggestions/>;
            case "IconImage": return <IconImage/>;
            case "Controlled": return <Controlled/>;
            case "MultilineMode": return <MultilineMode/>;
            case "SuggestionContainer": return <SuggestionContainer/>;
            default : break;

        }
        return "well come to fpt telecom"
    },{
        notes:'A simple very component'
    })
  