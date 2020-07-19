import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios,number ,color,object ,array} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import ForgotPassword from './ForgotPassword'
import LockScreen from './LockScreen'
import ResetPassword from './ResetPassword'
import SignIn from './SignIn'
import SignUp from './Singup'
const options ={
    ForgotPassword:'ForgotPassword',
    LockScreen:'LockScreen',
    ResetPassword:'ResetPassword',
    SignIn:'SignIn',
    SignUp:'SignUp'
}

storiesOf('Component | CustomViews',module)
.addDecorator(withKnobs)
.add("basic",()=>{
    const value = radios("types",options);
    switch(value){
        case 'ForgotPassword':
            return (<ForgotPassword/>);
        case 'LockScreen':
            return (<LockScreen/>);
        case 'ResetPassword':
            return (<ResetPassword/>);
        case 'SignIn':
            return (<SignIn/>);
        case 'SignUp':
            return (<SignUp/>);
        default :
            break;
    }
    return "wellcome storybook fpt telecome";
},{
    notes:'A simple very component'
})