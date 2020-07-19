import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text ,color,number} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//redux
import { createStore } from 'redux'
import {Provider }from 'react-redux'
//component
import BACKWARD_FORWARD from './index.jsx';

// const initalState = {
//     message:'BACKWARD'
// }
// const myReducer = (state=initalState,action)=>{
//     switch(action.type){
//         case "TEST":
//             return{
//                 ...state,
//                 message:"Next"
//             }
//         default:break;
//     }
//     return state
// }
const label = "Style"
const labelC = "Style"
const defaultColor = '#ff00ff';
const groupID = "GROUP-ID";

const defaultValue = 73;
const Options = {
   range: true,
   min: 60,
   max: 90,
   step: 1,
};
// const store = createStore(myReducer)
storiesOf('Component  | Button ' ,module) 
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("backtest",()=>{
    //     const value = color(labelC,defaultColor)
    //    console.log("lamnn",value)
        return (
            <BACKWARD_FORWARD
             value={color("color","#ffooff","groupID")}
             Width={number("number",Options,30,"groupID")}
            />
        )
    })
    // .add("BACKWARD",()=>(
    //      <Provider store={store}>
    //     <BACKWARD_FORWARD    
    //     FORWARD={boolean("FORWARD",false)}
    //     onClick={action("onClich")}
    //     primary={boolean("primary",false)}
    //     disabled={boolean("disabled",false)}
    //      />   
       
    //     </Provider>  
       
    // ),{
    //     notes:'A simple very component,use redux'
    // },{ backgrounds: [{
    //     name: 'red', value: 'rgba(255, 0, 0)',
    //   }]})

    
 