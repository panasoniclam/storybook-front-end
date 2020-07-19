import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios,number ,color,object ,array} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import ERR404 from './404'
import ERR500 from './500'

const options = {
    ERR404:"404",
    ERR500:'500',

}
storiesOf('Component | Extrapages',module)
.addDecorator(withKnobs)
.add("basic",()=>{
    const value = radios("types",options);
    switch(value){
       case '404':
           return <ERR404/>
        case '505':
            return <ERR500/>
        default :
            break;
    }
    return "wellcome storybook fpt telecome";
},{
    notes:'A simple very component'
})