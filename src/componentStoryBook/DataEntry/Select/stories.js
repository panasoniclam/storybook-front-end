import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component

import Basic from "./Basic";
import SeclectSize from "./SelectSize";
import SearchField from "./SearchField";
import SelectTag from "./SelectTag";
import SelectMultiple from "./SelectMultiple";
import SelectOption from "./SelectOption";
import SelectCoordinate from "./SelectCoordinate";
import WithValue from "./WithValue";
import AutomaticCompletion from "./AutomaticCompletion";

const options = {
    Basic:'Basic',
    SeclectSize:'SeclectSize',
    SearchField:'SearchField',
    SelectTag:'SelectTag',
    SelectMultiple:'SelectMultiple',
    SelectOption:'SelectOption',
    SelectCoordinate:'SelectCoordinate',
    WithValue:'WithValue',
    AutomaticCompletion:'AutomaticCompletion'
}
storiesOf('Component   | Select'  ,module) 
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=> {
        const value = radios("types",options) ;
        switch(value){
            case "Basic": return <Basic/>;
            case "SeclectSize": return <SeclectSize/>;
            case "SearchField": return <SearchField/>;
            case "SelectTag": return <SelectTag/>;
            case "SelectMultiple": return <SelectMultiple/>;
            case "SelectOption": return <SelectOption/>;
            case "SelectCoordinate": return <SelectCoordinate/>;
            case "WithValue": return <WithValue/>;
            case "AutomaticCompletion": return <AutomaticCompletion/>;
            default : break;

        }
        return 'well come to fpt telecom';
    },{
        notes:'A simple very component'
    })
  