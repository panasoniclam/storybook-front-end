import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text, radios,number ,color,object ,array} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import ProducGrid from './ProductGrid'
import ProductList from './ProductList'
const options = {
    ProducGrid:'ProducGrid',
    ProductList:'ProductList'
}
storiesOf('Component | eCommerce',module)
.addDecorator(withKnobs)
.add("basic",()=>{
    const value = radios("types",options);
    switch(value){
       case 'ProducGrid':
           return <ProducGrid/>
        case 'ProductList':
            return <ProductList/>
        default :
            break;
    }
    return "wellcome storybook fpt telecome";
},{
    notes:'A simple very component'
})