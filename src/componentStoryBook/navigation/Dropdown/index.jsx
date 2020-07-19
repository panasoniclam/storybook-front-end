import React, {Component} from "react";

import Basic from "./Basic";
import Placement from "./Placement";
import OtherElements from "./OtherElements";
import TriggerMode from "./TriggerMode";
import ClickEvent from "./ClickEvent";
import ButtonWithDropdown from "./ButtonWithDropdown";
import CascadingMenu from "./CascadingMenu";
import HidingMenu from "./HidingMenu";
import ContextMenu from "./ContextMenu";


class index extends Component {
  render() {
    const {basic,placement,otherElements,triggerMode,clickEvent,buttonWithDropdown,cascadingMenu,hidingMenu,contextMenu} = this.props
    return (
       <div>
         {
           basic ? <Basic/> : "" || placement ?  <Placement/> : "" || otherElements ?  <OtherElements/> : "" ||
           triggerMode ? <TriggerMode/> : "" || clickEvent ? <ClickEvent/> : "" || buttonWithDropdown ?  <ButtonWithDropdown/> : ""||
           cascadingMenu ? <CascadingMenu/> : "" || hidingMenu ?   <HidingMenu/> : "" || contextMenu ?   <ContextMenu/> : ""
         }
       </div>
          
   
    );
  }

}


export default index;
