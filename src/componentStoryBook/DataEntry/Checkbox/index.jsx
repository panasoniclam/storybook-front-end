import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Disabled from "./Disabled";
import ControlledCheckbox from "./ControlledCheckbox";
import CheckboxGroups from "./CheckboxGroups";
import UseWithGrid from "./UseWithGrid";
import CheckAll from "./CheckAll";

class Checkbox extends React.Component{
  render(){
    const {basic,
      checkboxGroups,
      controlledCheckbox,
      disabled,
      useWithGrid,
      checkAll} = this.props
    return(
      <div>
        {basic ?   <Basic/> : "" || checkboxGroups ?   <CheckboxGroups/> : "" || controlledCheckbox ?   <ControlledCheckbox/>  : ""
        || disabled ?  <Disabled/> : "" || useWithGrid ?  <UseWithGrid/> : "" || checkAll ?   <CheckAll/> : "" 
        }
      </div>
    )
  }
}

export default (Checkbox);
