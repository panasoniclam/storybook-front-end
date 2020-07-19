import React, {Component} from "react";


import SimpleList from "./SimpleList";
import BasicList from "./BasicList";
import Vertical from "./Vertical";


class List extends Component {
   
  render() {
    const {
      simpleList,
      basicList,
      vertical,
     
    } = this.props
    return (
       <div>
         {
           simpleList ?  <SimpleList/>  : '' || basicList ? <BasicList/> :'' || vertical ? <Vertical/> :''
         }  
       </div>
    );
  }
}


export default (List);
