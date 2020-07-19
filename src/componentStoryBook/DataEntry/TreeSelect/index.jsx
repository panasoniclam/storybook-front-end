import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import MultipleSelection from "./MultipleSelection";
import GenerateTreeData from "./GenerateTreeData";
import Checkable from "./Checkable";


class TreeSelect extends Component {


  render() {
    const {
      basic,
      multipleSelection,
      generateTreeData,
      checkable
     }  = this.props
    return (
     <div>
       {
         basic ? <Basic/> : '' || multipleSelection ? <MultipleSelection/> : '' ||
         generateTreeData ? <GenerateTreeData/> : '' || checkable ? <Checkable/> : ''
       }
     </div>
    );
  }
}


export default TreeSelect;
