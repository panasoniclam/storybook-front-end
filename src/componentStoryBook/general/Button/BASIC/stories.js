import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Basic from '.';
const textDefault = "Click";
storiesOf('Component  | Icon' ,module) 
    .addDecorator(centered)
    .addDecorator(withKnobs)
    // .addDecorator()
    .add("submit",()=>(
        <Basic
        
        contend={text("contend",textDefault)}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",true)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",false)}
        link={boolean("link",false)}

      
        />
    ),{
        notes:'A simple very component'
    })
    .add("primary",()=>(
        <Basic
        
        contend={text("contend",textDefault)}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",true)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",false)}
        link={boolean("link",false)}
        />
    ))
    .add("dashed",()=>(
        <Basic
        
        contend={text("contend",textDefault)}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",true)}
        danger={boolean("danger",false)}
        link={boolean("link",false)}
        />
    ))
    .add("danger",()=>(
        <Basic
        
        contend={text("contend",textDefault)}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",true)}
        link={boolean("link",false)}
        />
    ))
    .add("link",()=>(
        <Basic
        
        contend={text("contend",textDefault)}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",false)}
        link={boolean("link",true)}
        />
    ))
    ;