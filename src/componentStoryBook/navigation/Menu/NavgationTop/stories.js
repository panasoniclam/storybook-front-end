import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, text, boolean, number,date } from '@storybook/addon-knobs';
 
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import BASIC from './NavigationTop'
storiesOf('Component  navigation | MenuThemes' ,module) 
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=>(
        <BASIC
      
        />
    ),{
        notes:'A simple very component'
    })
     