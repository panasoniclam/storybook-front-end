import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Accordion from "./Accordion";
import NestedPanel from "./NestedPanel";
import Borderless from "./Borderless";
import CustomPanel from "./CustomPanel";
import NoArrow from "./NoArrow";

class Collapse extends React.Component{
  render(){
    const {
      basic,
      accordion,
      nestedPanel,
      borderless,
      customPanel,
      noArrow
    } = this.props
    return(
      <div>
         {
           basic ? <Basic/>  : '' || accordion ? <Accordion/> : '' ||
           nestedPanel ? <NestedPanel/> :'' || borderless ? <Borderless/> :''||
           customPanel ? <CustomPanel/> : '' || noArrow ? <NoArrow/> : ''
         }
      </div>
    )
  }
}
 

export default Collapse;
