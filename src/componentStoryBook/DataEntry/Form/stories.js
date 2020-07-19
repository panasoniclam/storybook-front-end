import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import Registration from "./Registration";
import AdvancedSearch from "./AdvancedSearch";
import DynamicFormItem from "./DynamicFormItem";
import TimeRelatedControls from "./TimeRelatedControls";
import CustomizedFormControls from "./CustomizedFormControls";
import StoreFormData from "./StoreFormData";
import CustomizedValidation from "./CustomizedValidation";
import CoordinatedControls from "./CoordinatedControls";
import FormLayout from "./FormLayout";
import DynamicRules from "./DynamicRules";
import OtherFormControls from "./OtherFormControls";

const options = {
    Registration:"Registration",
    AdvancedSearch:"AdvancedSearch",
    DynamicFormItem:"DynamicFormItem",
    TimeRelatedControls:"TimeRelatedControls",
    CustomizedFormControls:"CustomizedFormControls",
    CoordinatedControls:"CoordinatedControls",
    FormLayout:"FormLayout",
    DynamicRules:"DynamicRules",
    OtherFormControls:"OtherFormControls"
}
storiesOf('Component   |  Form'  ,module) 
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=> {
       const value = radios("types",options);
       switch(value){
           case "Registration": return <Registration/>;
           case "AdvancedSearch": return <AdvancedSearch/>;
           case "DynamicFormItem" : return <DynamicFormItem/>;
           case "TimeRelatedControls" : return <TimeRelatedControls/>;
           case "CustomizedFormControls": return <CustomizedFormControls/>;
           case "FormLayout": return <FormLayout/>;
           case "DynamicRules" : return <DynamicRules/>;
           case "OtherFormControls": return <OtherFormControls/>
           default : break;
       }
       return "well come to fpt telecom"
    },{
        notes:'A simple very component'
    })
  