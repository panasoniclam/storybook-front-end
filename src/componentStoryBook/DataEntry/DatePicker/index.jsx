import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import DateFormat from "./DateFormat";
import ThreeSizes from "./ThreeSizes";
import ChooseTime from "./ChooseTime";
import Disabled from "./Disabled";
import PresettedRanges from "./PresettedRanges";
import CustomizedRangePicker from "./CustomizedRangePicker";
import ControlledPanels from "./ControlledPanels";
import ExtraFooter from "./ExtraFooter";
import CustomizedDateRendering from "./CustomizedDateRendering";

class DatePicker extends React.Component{
  
  render(){
    const {
      basic,
    dateFormat,
    threeSizes,
    chooseTime,
    disabled,pesettedRanges,
    customizedRangePicker,
    controlledPanels,
    extraFooter,
    customizedDateRendering
    } = this.props
    return(
     <div>
       {
         basic ?   <Basic/> : "" || dateFormat ?   <DateFormat/> : "" ||  threeSizes ? <ThreeSizes/> : "" ||
         chooseTime ?  <ChooseTime/> : "" || disabled ?  <Disabled/> : ""  ||  pesettedRanges ?   <PresettedRanges/> : "" ||
         customizedRangePicker ? <CustomizedRangePicker/> : "" || controlledPanels ? <ControlledPanels/> : "" ||
         extraFooter ?   <ExtraFooter/> : "" || customizedDateRendering ?  <CustomizedDateRendering/> : ""
       }
     </div>
    )
  }
}
 

export default DatePicker;
