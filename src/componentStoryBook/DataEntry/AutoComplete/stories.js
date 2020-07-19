import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component

import Basic from "./Basic";
import Customized from "./Customized";
import CustomizeInputComponent from "./CustomizeInputComponent";
import NonCaseSensitiveAutoComplete from "./NonCaseSensitiveAutoComplete";
import LookupPatterns from "./LookupPatterns";
const options = {
    Basic:"Basic",
    Customized:"Customized",
    CustomizeInputComponent:"CustomizeInputComponent",
    NonCaseSensitiveAutoComplete:"NonCaseSensitiveAutoComplete",
    LookupPatterns:"LookupPatterns"
}
storiesOf('Component   |  AutoComplete '  ,module) 
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=> {
      const value = radios("types",options)
      switch(value){
          case "Basic":
              return(
                  <Basic/>
              )
          case "Customized":
              return(
                  <Customized/>
              )
         case "CustomizeInputComponent":
             return(
                 <CustomizeInputComponent/>
             )
         case "LookupPatterns":
             return(
                 <LookupPatterns/>
             )
             case "NonCaseSensitiveAutoComplete":
                 return(
                     <NonCaseSensitiveAutoComplete/>
                 )
         default:
             break;
      }
      return "well come to fpt telecom";
    },{
        notes:'A simple very component'
    })