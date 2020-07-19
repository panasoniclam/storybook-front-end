import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import BASIC from './index.jsx'
storiesOf('Component  navigation | Affix' ,module) 
    .addDecorator(centered)
    .addDecorator(withKnobs)
 
    .add("basic",()=>(
        <BASIC
          onClick={action("click")}
          
          basic={boolean("basic",true)}
          callback={boolean("withicon",false)}
          containerToScroll={boolean("configuringSeparator",false)}
        />
    ),{
        notes:'A simple very component'
    })
    .add(" callback",()=>(
        <BASIC
          onClick={action("click")}
          
          basic={boolean("basic",false)}
          callback={boolean("withicon",true)}
          containerToScroll={boolean("configuringSeparator",false)}
        />
    ),{
        notes:'A simple very component'
    })
    .add("containerToScroll",()=>(
        <BASIC
          onClick={action("click")}
          
          basic={boolean("basic",false)}
          callback={boolean("withicon",false)}
          containerToScroll={boolean("configuringSeparator",true)}
        />
    ),{
        notes:'A simple very component'
    })