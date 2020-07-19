import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios,number ,color,object ,array} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Basic from "./Basic";
import Type from "./Type";
import AutosetSize from "./AutosetSize";
import WithBadge from "./WithBadge";
const options = {
    Basic:'Basic',
    Type:'Type',
    AutosetSize:'AutosetSize',
    WithBadge:'WithBadge'
}
storiesOf('Component |  Avatar '  ,module) 
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=>{
        const value = radios("types",options);
        switch(value){
            case 'Basic':
                return (<Basic/>);
            case 'Type':
                return (<Type/>);
            case 'AutosetSize':
                return (<AutosetSize onClick={ action("click")}/>);
            case 'WithBadge':
                return (<WithBadge/>);
            default :
                break;
        }
        return "wellcome storybook fpt telecome";
    },{
        notes:'A simple very component'
    })
