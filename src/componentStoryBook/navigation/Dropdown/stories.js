import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import BASIC from './index.jsx'
storiesOf('Component  navigation | Dropdown' ,module) 
    .addDecorator(centered)
    .addDecorator(withKnobs)
 
    .add("basic",()=>(
        <BASIC
        basic={boolean("basic",true)}
        placement={boolean("placement",false)}
        otherElements={boolean("otherElements",false)}
        triggerMode={boolean("triggerMode",false)}
        clickEvent={boolean("clickEvent",false)}
        buttonWithDropdown={boolean("buttonWithDropdown",false)}
        cascadingMenu={boolean("cascadingMenu",false)}
        hidingMenu={boolean("hidingMenu",false)}
        contextMenu={boolean("contextMenu",false)}

        />
    ),{
        notes:'A simple very component'
    })
    .add("placement",()=>(
        <BASIC
        basic={boolean("basic",false)}
        placement={boolean("placement",true)}
        otherElements={boolean("otherElements",false)}
        triggerMode={boolean("triggerMode",false)}
        clickEvent={boolean("clickEvent",false)}
        buttonWithDropdown={boolean("buttonWithDropdown",false)}
        cascadingMenu={boolean("cascadingMenu",false)}
        hidingMenu={boolean("hidingMenu",false)}
        contextMenu={boolean("contextMenu",false)}

        />
    ),{
        notes:'A simple very component'
    })
    .add("therElements",()=>(
        <BASIC
        basic={boolean("basic",false)}
        placement={boolean("placement",false)}
        otherElements={boolean("otherElements",true)}
        triggerMode={boolean("triggerMode",false)}
        clickEvent={boolean("clickEvent",false)}
        buttonWithDropdown={boolean("buttonWithDropdown",false)}
        cascadingMenu={boolean("cascadingMenu",false)}
        hidingMenu={boolean("hidingMenu",false)}
        contextMenu={boolean("contextMenu",false)}

        />
    ),{
        notes:'A simple very component'
    })
    .add("triggerMode",()=>(
        <BASIC
        basic={boolean("basic",false)}
        placement={boolean("placement",false)}
        otherElements={boolean("otherElements",false)}
        triggerMode={boolean("triggerMode",true)}
        clickEvent={boolean("clickEvent",false)}
        buttonWithDropdown={boolean("buttonWithDropdown",false)}
        cascadingMenu={boolean("cascadingMenu",false)}
        hidingMenu={boolean("hidingMenu",false)}
        contextMenu={boolean("contextMenu",false)}

        />
    ),{
        notes:'A simple very component'
    })
    .add("clickEvent",()=>(
        <BASIC
        basic={boolean("basic",false)}
        placement={boolean("placement",false)}
        otherElements={boolean("otherElements",false)}
        triggerMode={boolean("triggerMode",false)}
        clickEvent={boolean("clickEvent",true)}
        buttonWithDropdown={boolean("buttonWithDropdown",false)}
        cascadingMenu={boolean("cascadingMenu",false)}
        hidingMenu={boolean("hidingMenu",false)}
        contextMenu={boolean("contextMenu",false)}

        />
    ),{
        notes:'A simple very component'
    })
    .add("buttonWithDropdown",()=>(
        <BASIC
        basic={boolean("basic",false)}
        placement={boolean("placement",false)}
        otherElements={boolean("otherElements",false)}
        triggerMode={boolean("triggerMode",false)}
        clickEvent={boolean("clickEvent",false)}
        buttonWithDropdown={boolean("buttonWithDropdown",true)}
        cascadingMenu={boolean("cascadingMenu",false)}
        hidingMenu={boolean("hidingMenu",false)}
        contextMenu={boolean("contextMenu",false)}

        />
    ),{
        notes:'A simple very component'
    })
    .add("cascadingMenu",()=>(
        <BASIC
        basic={boolean("basic",false)}
        placement={boolean("placement",false)}
        otherElements={boolean("otherElements",false)}
        triggerMode={boolean("triggerMode",false)}
        clickEvent={boolean("clickEvent",false)}
        buttonWithDropdown={boolean("buttonWithDropdown",false)}
        cascadingMenu={boolean("cascadingMenu",true)}
        hidingMenu={boolean("hidingMenu",false)}
        contextMenu={boolean("contextMenu",false)}

        />
    ),{
        notes:'A simple very component'
    })
    .add("hidingMenu",()=>(
        <BASIC
        basic={boolean("basic",false)}
        placement={boolean("placement",false)}
        otherElements={boolean("otherElements",false)}
        triggerMode={boolean("triggerMode",false)}
        clickEvent={boolean("clickEvent",false)}
        buttonWithDropdown={boolean("buttonWithDropdown",false)}
        cascadingMenu={boolean("cascadingMenu",false)}
        hidingMenu={boolean("hidingMenu",true)}
        contextMenu={boolean("contextMenu",false)}

        />
    ),{
        notes:'A simple very component'
    })
    .add("contextMenu",()=>(
        <BASIC
        basic={boolean("basic",false)}
        placement={boolean("placement",false)}
        otherElements={boolean("otherElements",false)}
        triggerMode={boolean("triggerMode",false)}
        clickEvent={boolean("clickEvent",false)}
        buttonWithDropdown={boolean("buttonWithDropdown",false)}
        cascadingMenu={boolean("cascadingMenu",false)}
        hidingMenu={boolean("hidingMenu",false)}
        contextMenu={boolean("contextMenu",true)}

        />
    ),{
        notes:'A simple very component'
    })