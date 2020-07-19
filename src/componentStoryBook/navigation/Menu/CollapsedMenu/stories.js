import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import BASIC from './index'

storiesOf('Component  navigation | CollapsedMenu' ,module) 
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("collapsed",()=>(
        <BASIC  
        onClick={action("click")}
        collapsed={boolean("collapsed",true)}
        a={boolean("600",false)}
        />
    ),{
        notes:'A simple very component'
    })
    .add("600",()=>(
        <BASIC  
        onClick={action("click")}
        collapsed={boolean("collapsed",false)}
        a={boolean("600",true)}
        />
    ),{
        notes:'A simple very component'
    })