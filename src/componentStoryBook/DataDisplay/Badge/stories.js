import { action } from '@storybook/addon-actions';
import React from 'react'
import  { withKnobs, boolean, text, radios,number ,color,object ,array}  from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
//component
 
import Basic from "./Basic";
import StandAlone from "./StandAlone";
import OverflowCount from "./OverflowCount";
import Status from "./Status";
import Dynamic from "./Dynamic";
import RedBadge from "./RedBadge";
import Clickable from "./Clickable";
const Options = {
    Basic:'Basic',
    StandAlone:'StandAlone',
    OverflowCount: 'OverflowCount',
    Status:"Status",
    Dynamic:"Dynamic",
    RedBadge:"RedBadge",
    Clickable:"Clickable"
};
storiesOf('Component   |  Badge '  ,module) 
    .addDecorator(withKnobs)

    .add("state",()=>{
       const value = radios("types",Options) 
       switch(value){
           case "Basic":
               return(
                   <Basic
                   />
               );
            case 'StandAlone':
                return(
                    <StandAlone/>
                )
            case 'OverflowCount':
                return(
                    <OverflowCount/>
                )
            case "Status":
                return(
                    <Status/>
                )
            case "Dynamic":
                    const objectDynamic= {
                        count: 5,
                        show:true
                    }
                    object("Dynamic state",objectDynamic);
            return(
                <Dynamic
                />
            )
            case "RedBadge":
            return(
                <RedBadge/>
            )
            case "Clickable":
                return(
                    <Clickable/>
                )
            default:
                break;
       }
       return  "wellcome storybook fpt telecome";
    },{
        notes:'A simple very component'
    })
    .add("props",()=>{
        const value = radios("types Component",Options) 
        
        switch(value){
            case "Basic":
                return(
                    <Basic
                     count={text("count",10)}
                    />
                );
             case 'StandAlone':
                 return(
                     <StandAlone/>
                 )
             case 'OverflowCount':
                 return(
                     <OverflowCount/>
                 )
             case "Status":
                 return(
                     <Status/>
                 )
             case "Dynamic":
                 const objectDynamic= {
                     count:text("count",10),
                     decline:"action",
                     increase:"action",
                     onChange:"action",
                     show:boolean("show",false)
                 }
                 object("Dynamic props",objectDynamic);
             return(
                 <Dynamic
                 Props ={boolean("Transmisson props",false)}


                 count={text("count",10)}
                 decline={action('click')}
                 increase={action('click')}
                 onChange={action("onChange")}
                 show={boolean("show",false)}
                 />
             )
             case "RedBadge":
             return(
                 <RedBadge/>
             )
             case "Clickable":
                 return(
                     <Clickable/>
                 )
             default:
                 break;
        }
        return <h1 style={{fontSize:30,color:'red'}}> wellcome storybook fpt telecome </h1> ;
     },{
         notes:'A simple very component'
     })