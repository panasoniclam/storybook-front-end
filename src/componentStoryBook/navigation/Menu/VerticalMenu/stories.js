import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, text, boolean, number,date } from '@storybook/addon-knobs';
 
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import BASIC from './index.jsx'
storiesOf('Component  navigation | VerticalMenu ' ,module) 
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=>(
        <BASIC
         onClick={action("click")}
                 />
    ),{
        notes:'A simple very component'
    })