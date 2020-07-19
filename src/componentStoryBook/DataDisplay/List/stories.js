import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios,number ,color,object ,array} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Index from '.';

import SimpleList from "./SimpleList";
import BasicList from "./BasicList";
import Vertical from "./Vertical";
//radio
const options = {
    basicList:'basicList',
    simpleList: "simpleList",
    vertical: 'vertical'
};
//number
const labelNumber= 'Temperature';
const defaultValue = 73;
const Options = {
   range: true,
   min: 60,
   max: 90,
   step: 1,
};
const groupId= 'GROUP-ID1';
//color
const labelColor = 'Color';
const defaultValueColor= '#ff00ff';
const groupIdColor = 'GROUP-ID1';
//object
const labelObject = 'Styles';
const defaultValueObject = {
  backgroundColor: 'red'
};
const groupIdObject = 'GROUP-ID1';

//array
const labelArray = 'Styles';
const defaultValueArray = ['Red'];
 
storiesOf('Component  | List '  ,module) 
    .addDecorator(withKnobs)
    .add("basic",()=>{
        const value =radios("type",options);
        const numberValue = number(labelNumber, defaultValue, Options, );
        const valueColor = color(labelColor, defaultValueColor, );
        const valueObject = object(labelObject, defaultValueObject, );
        const valueArray = array( labelArray, defaultValueArray);
        switch(value){
            case "basicList":
                return (
                <BasicList
                contend={text("contend","lamnn8")}
                
                />
                );
            case "simpleList":
                return <SimpleList/>;
            case "vertical":
                return <Vertical/>;
            default :break;
        }
        return  'well come fpt telecom'

    },{
        notes:'A simple very component'
    })




















    
    // .add("basic",()=>(
    //     <Index
    //     simpleList={radios("1231232", options, defaultValue)}
    //     basicList={boolean("basicList",false)}
    //     vertical={boolean("vertical",false)}

    //     />
        
    // ),{
    //     notes:'A simple very component'
    // })