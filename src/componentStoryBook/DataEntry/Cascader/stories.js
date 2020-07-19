import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Basic from "./Basic";
import DefaultValue from "./DefaultValue";
import CustomTrigger from "./CustomTrigger";
import Hover from "./Hover";
import DisabledOption from "./DisabledOption";
import ChangeOnSelect from "./ChangeOnSelect";
import Size from "./Size";
import CustomRender from "./CustomRender";
import Search from "./Search";
import LoadOptions from "./LoadOptions";

const options = {
    Basic:"Basic",
    DefaultValue:"DefaultValue",
    CustomTrigger:"CustomTrigger",
    Hover:"Hover",
    DisabledOption:"DisabledOption",
    ChangeOnSelect:"ChangeOnSelect",
    Size:"Size",
    CustomRender:"CustomRender",
    Search:"Search",
    LoadOptions:"LoadOptions"
}
storiesOf('Component   |  Cascader'  ,module) 
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=>{
     const value = radios("types",options);
    switch(value){
        case "Basic":
            return(
                <Basic/>
            );
        case "DefaultValue":
            return(
                <DefaultValue/>
            );
        case "CustomTrigger":
            return(
                <CustomTrigger/>
            );
        case "Hover":
            return(
                <Hover/>
            );
        case "DisabledOption":
            return(
                <DisabledOption/>
            )
        case "ChangeOnSelect":
            return(
                <ChangeOnSelect/>
            );
        case "Size":
            return(
                <Size/>
            )
        case "CustomRender":
            return(
                <CustomRender/>
            )
        case "Search":
            return(
                <Search/>
            )
        case  "LoadOptions":
            return(
                <LoadOptions/>
            )
        default : break;
    }
    return "well come to fpt telecom"
    },{
        notes:'A simple very component'
    })
  