import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text ,radios} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
 
import Basic from "./Basic";
import NoticeCalendar from "./NoticeCalendar";
import CalendarCard from "./CalendarCard";
import SelectableCalendar from "./SelectableCalendar";
const options ={
    Basic:"Basic",
    NoticeCalendar:"NoticeCalendar",
    CalendarCard :"CalendarCard",
    SelectableCalendar:"SelectableCalendar"
}
storiesOf('Component   | Calendar'  ,module) 
    .addDecorator(withKnobs)
    .add("basic",()=> {
        const value = radios("types",options)
       switch(value){
           case "Basic":
               return(
                   <Basic/>
               )
            case "NoticeCalendar":
                return(
                    <NoticeCalendar/>
                )
            case "CalendarCard":
                    return(
                    <CalendarCard/>
                    );
            case "SelectableCalendar":
                return(
                    <SelectableCalendar/>
                )
            default:
                break;
       }
       return  "wellcome storybook fpt telecome";
    },{
        notes:'A simple very component'
    })