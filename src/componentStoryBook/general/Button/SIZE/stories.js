import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Button from '.';
const textDefault = "Download";
storiesOf('Component general | SIZE' ,module) 
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("primary",()=>(
        <Button
         primary={boolean("primary",true)}
        
         dashed={boolean("dashed",false)}
         danger={boolean("danger",false)}
         link={boolean("link",false)}
         download={boolean("download",false)}
         circle={boolean("circle",false)}
         round={boolean("round",false)}

        onClick={action("onClick")} 
        contend={text("contend",textDefault)}
        />
    ))
    .add("dashed",()=>(
        <Button
         primary={boolean("primary",false)}
         dashed={boolean("dashed",true)}
         danger={boolean("danger",false)}
         link={boolean("link",false)}
         download={boolean("download",false)}
         circle={boolean("circle",false)}
         round={boolean("round",false)}

        onClick={action("onClick")} 
        contend={text("contend",textDefault)}
        />
    )) 
    .add("danger",()=>(
        <Button
         primary={boolean("primary",false)}
         dashed={boolean("dashed",false)}
         danger={boolean("danger",true)}
         link={boolean("link",false)}
         download={boolean("download",false)}
         circle={boolean("circle",false)}
         round={boolean("round",false)}

        onClick={action("onClick")} 
        contend={text("contend",textDefault)}
        />
    ))
    .add("link",()=>(
        <Button
         primary={boolean("primary",false)}
         dashed={boolean("dashed",false)}
         danger={boolean("danger",false)}
         link={boolean("link",true)}
         download={boolean("download",false)}
         circle={boolean("circle",false)}
         round={boolean("round",false)}

        onClick={action("onClick")} 
        contend={text("contend",textDefault)}
        />
    ))
    .add("download",()=>(
        <Button
         primary={boolean("primary",true)}
         dashed={boolean("dashed",false)}
         danger={boolean("danger",false)}
         link={boolean("link",false)}
         download={boolean("download",true)}
         circle={boolean("circle",false)}
         round={boolean("round",false)}

        onClick={action("onClick")} 
        contend={text("contend",textDefault)}
        />
    ))
    .add("circle",()=>(
        <Button
         primary={boolean("primary",true)}
         dashed={boolean("dashed",false)}
         danger={boolean("danger",false)}
         link={boolean("link",false)}
         download={boolean("download",true)}
         circle={boolean("circle",true)}
         round={boolean("round",false)}

        onClick={action("onClick")} 
       // contend={text("contend",textDefault)}
        />
    ))
    .add("round",()=>(
        <Button
         primary={boolean("primary",false)}
         dashed={boolean("dashed",false)}
         danger={boolean("danger",false)}
         link={boolean("link",false)}
         download={boolean("download",false)}
         circle={boolean("circle",false)}
         round={boolean("round",true)}

        onClick={action("onClick")} 
        contend={text("contend",textDefault)}
        />
    ))