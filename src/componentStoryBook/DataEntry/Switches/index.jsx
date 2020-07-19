import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import SwitchDisabled from "./SwitchDisabled";
import SwitchTextIcon from "./SwitchTextIcon";
import SwitchSize from "./SwitchSize";
import SwitchLoading from "./SwitchLoading";


class Switches extends Component {
  render() {
    const {
      basic,
      switchDisabled,
      switchLoading,
      switchSize,
      switchTextIcon
    } =this.props
    return (

      <div>
         {
           basic ? <Basic/> : "" || switchDisabled ? <SwitchDisabled/> : "" ||
           switchLoading ? <SwitchLoading/> : "" || switchSize ? <SwitchSize/> : "" ||
           switchTextIcon ? <SwitchTextIcon/> : ""
         }
        </div>
     
    );
  }
}


export default Switches;
