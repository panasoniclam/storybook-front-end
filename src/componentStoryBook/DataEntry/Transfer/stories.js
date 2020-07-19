import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text,radios } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Basic from "./Basic";
import Search from "./Search";
import Advance from "./Advance";
import CustomData from "./CustomData";

const options = {
    Basic:'Basic',
    Search:'Search',
    Advance:'Advance',
    CustomData:'CustomData'
}
storiesOf('Component   |  Transfer'  ,module) 
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=>{
        const value = radios("types",options);
        switch(value){
          case "Basic": return <Basic/>;
          case "Search": return <Search/>;
          case "Advance": return <Advance/>;
          case "CustomData": return <CustomData/>;
          default : break;
        }
      return 'well come to fpt telecom';
  },{
        notes:'A simple very component'
    })
  