import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Basic from '.';
storiesOf('Component general | ICON' ,module) 
    .addDecorator(centered)
    .addDecorator(withKnobs)
    
    .add("primary",()=>(
        <Basic
        primary={boolean("primary",true)}
        circle={boolean("circle",false)}
        search={boolean("search",false)}
        contend={boolean("contend",true)}

        onClick={action("Click")}
        />
    ),{
        notes:'A simple very component'
    })
    .add("search",()=>(
        <Basic
        primary={boolean("primary",true)}
        circle={boolean("circle",true)}
        search={boolean("search",true)}
        contend={boolean("contend",false)}

        onClick={action("Click")}
        />
    ),{
        notes:'A simple very component'
    })
 