import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import BASIC from './index'

storiesOf('Component  navigation | CurrentSubMenu' ,module) 
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=>(
        <BASIC
        onClick={action("onClick" )}
        
        />
    ),{
        notes:'A simple very component'
    })