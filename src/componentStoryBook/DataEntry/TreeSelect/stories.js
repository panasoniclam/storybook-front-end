import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text ,radios} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Basic from "./Basic";
import MultipleSelection from "./MultipleSelection";
import GenerateTreeData from "./GenerateTreeData";
import Checkable from "./Checkable";
const  options = {
    Basic:'Basic',
    MultipleSelection:'MultipleSelection',
    GenerateTreeData:'GenerateTreeData',
    Checkable:'Checkable',
}
storiesOf('Component   |  TreeSelect'  ,module) 
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=>{
        const value = radios("types",options);
        switch(value){
          case "Basic": return <Basic/>;
          case "MultipleSelection": return <MultipleSelection/>;
          case "GenerateTreeData": return <GenerateTreeData/>;
          case "Checkable": return <Checkable/>;
          default : break;
        }
      return 'well come to fpt telecom';
  },{
        notes:'A simple very component'
    })
  