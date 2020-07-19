import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component

import Basic from "./Basic";
import NoBorder from "./NoBorder";
import Simple from "./Simple";
import Customize from "./Customize";
import Column from "./Column";
import LoadingCard from "./LoadingCard";
import Grid from "./Grid";
import InnerCard from "./InnerCard";
import WithTabs from "./WithTabs";
import SupportMore from "./SupportMore";
 
const options = {
    Basic:"Basic",
    NoBorder:"NoBorder",
    Simple:"Simple",
    Customize:"Customize",
    Column:"Column",
    LoadingCard:"LoadingCard",
    Grid:"Grid",
    InnerCard:"InnerCard",
    WithTabs:"WithTabs",
    SupportMore:"SupportMore"

}

storiesOf('Component   | Cards'  ,module) 
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=>{
       const value = radios("types",options); 
        switch(value){
            case "Basic":
                return(
                    <Basic/>
                );
            case "NoBorder":
                return(
                    <NoBorder/>
                );
            case "Simple":
            return(
                <Simple/>
            )
            case "Customize":
                return(
                    <Customize/>
                );
        
            case "Column":
                return(
                    <Column/>
                );
            case "LoadingCard":
                return(
                    <LoadingCard/>
                );
            case "Grid":
            return(
                <Grid/>
            );
            case "InnerCard":
            return(
                <InnerCard/>
            );
            case "WithTabs":
            return(
                <WithTabs/>
            );
            case "SupportMore":
            return(
                <SupportMore/>
            );
            default:
                break;
        }
        return  "wellcome to fpt telecom"
    },{
        notes:'A simple very component'
    });