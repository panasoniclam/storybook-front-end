import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';

import Button from '.'

const textLoading = "Loading"
const textClose ="Close"
storiesOf('Component general |  LOADING' ,module) 
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("disabled",()=>(
        <Button
        contend={text("contend",textLoading)}

        disabled={boolean("disabled",true)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",false)}
        link={boolean("link",false)}

        loading={boolean("loading",false)}
        icon={boolean("icon",false)}
        
        circle={boolean("circle",false)}
        ircle_outline={boolean("ircle_outline",false)}
        round={boolean("round",false)}
        />
    ))
    .add("submit",()=>(
        <Button
        contend={text("contend",textLoading)}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",true)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",false)}
        link={boolean("link",false)}

        loading={boolean("loading",false)}
        icon={boolean("icon",false)}
        
        circle={boolean("circle",false)}
        ircle_outline={boolean("ircle_outline",false)}
        round={boolean("round",false)}
        />
    ))
    .add("primary",()=>(
        <Button
        contend={text("contend",textLoading)}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",true)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",false)}
        link={boolean("link",false)}

        loading={boolean("loading",false)}
        icon={boolean("icon",false)}
        
        circle={boolean("circle",false)}
        ircle_outline={boolean("ircle_outline",false)}
        round={boolean("round",false)}
        />
    ))
    .add("dashed",()=>(
        <Button
        contend={text("contend",textLoading)}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",true)}
        danger={boolean("danger",false)}
        link={boolean("link",false)}

        loading={boolean("loading",false)}
        icon={boolean("icon",false)}
        
        circle={boolean("circle",false)}
        ircle_outline={boolean("ircle_outline",false)}
        round={boolean("round",false)}
        />
    ))
    .add("danger",()=>(
        <Button
        contend={text("contend",textLoading)}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",true)}
        link={boolean("link",false)}

        loading={boolean("loading",false)}
        icon={boolean("icon",false)}
        
        circle={boolean("circle",false)}
        ircle_outline={boolean("ircle_outline",false)}
        round={boolean("round",false)}
        />
    ))
    .add("link",()=>(
        <Button
        contend={text("contend",textLoading)}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",false)}
        link={boolean("link",true)}

        loading={boolean("loading",false)}
        icon={boolean("icon",false)}
        
        circle={boolean("circle",false)}
        ircle_outline={boolean("ircle_outline",false)}
        round={boolean("round",false)}
        />
    ))
    .add("loading",()=>(
        <Button
        contend={text("contend",textLoading)}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",false)}
        link={boolean("link",false)}

        loading={boolean("loading",true)}
        icon={boolean("icon",false)}
        
        circle={boolean("circle",false)}
        ircle_outline={boolean("ircle_outline",false)}
        round={boolean("round",false)}
        />
    ))
    .add("icon",()=>(
        <Button
        contend={text("contend",textClose)}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",false)}
        link={boolean("link",false)}

        loading={boolean("loading",false)}
        icon={boolean("icon",true)}
        
        circle={boolean("circle",false)}
        ircle_outline={boolean("ircle_outline",false)}
        round={boolean("round",false)}
        />
    ))
    .add("circle",()=>(
        <Button
        contend={text("contend","")}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",false)}
        link={boolean("link",false)}

        loading={boolean("loading",false)}
        icon={boolean("icon",false)}
        
        circle={boolean("circle",true)}
        ircle_outline={boolean("ircle_outline",false)}
        round={boolean("round",false)}
        />
    ))
    .add("ircle_outline",()=>(
        <Button
        contend={text("contend",textLoading)}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",false)}
        link={boolean("link",false)}

        loading={boolean("loading",false)}
        icon={boolean("icon",false)}
        
        circle={boolean("circle",false)}
        ircle_outline={boolean("ircle_outline",true)}
        round={boolean("round",false)}
        />
    ))
    .add("round",()=>(
        <Button
        contend={text("contend",textLoading)}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",false)}
        link={boolean("link",false)}

        loading={boolean("loading",false)}
        icon={boolean("icon",false)}
        
        circle={boolean("circle",false)}
        ircle_outline={boolean("ircle_outline",false)}
        round={boolean("round",true)}
        />
    ))
    .add("icon-close",()=>(
        <Button
        contend={text("contend","")}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",true)}
        link={boolean("link",false)}

        loading={boolean("loading",false)}
        icon={boolean("icon",true)}
        
        circle={boolean("circle",true)}
        ircle_outline={boolean("ircle_outline",false)}
        round={boolean("round",false)}
        />
    ))
    .add("icon-loading",()=>(
        <Button
        contend={text("contend","")}

        disabled={boolean("disabled",false)}
        
        onClick={action("click")}


        submit={boolean("submit",false)}
        primary={boolean("primary",false)}
        dashed={boolean("dashed",false)}
        danger={boolean("danger",true)}
        link={boolean("link",false)}

        loading={boolean("loading",true)}
        icon={boolean("icon",false)}
        
        circle={boolean("circle",true)}
        ircle_outline={boolean("ircle_outline",false)}
        round={boolean("round",false)}
        />
    ))