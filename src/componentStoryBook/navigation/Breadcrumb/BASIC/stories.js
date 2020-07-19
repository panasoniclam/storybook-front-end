import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import BASIC from './index'
storiesOf('Component  navigation | Breadcrumb' ,module) 
    .addDecorator(centered)
    .addDecorator(withKnobs)
 
    .add("basic",()=>(
        <BASIC
          onClick={action("click")}
          
          basic={boolean("basic",true)}
          withicon={boolean("withicon",false)}
          configuringSeparator={boolean("configuringSeparator",false)}
        />
    ),{
        notes:'A simple very component'
    })
    .add("withicon",()=>(
        <BASIC
          onClick={action("click")}
          
          basic={boolean("basic",false)}
          withicon={boolean("withicon",true)}
          configuringSeparator={boolean("configuringSeparator",false)}
        />
    ),{
        notes:'A simple very component'
    })
    .add("configuringSeparator",()=>(
        <BASIC
          onClick={action("click")}
          
          basic={boolean("basic",false)}
          withicon={boolean("withicon",false)}
          configuringSeparator={boolean("configuringSeparator",true)}
        />
    ),{
        notes:'A simple very component'
    })