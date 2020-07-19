import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import StandAlone from "./StandAlone";
import OverflowCount from "./OverflowCount";
import Status from "./Status";
import Dynamic from "./Dynamic";
import RedBadge from "./RedBadge";
import Clickable from "./Clickable";

class Badge extends React.Component{
  render(){
    const {
      basic,
      overflowCount,
      status,
      dynamic,
      redBadge,
      clickable,
      standAlone
    } = this.props
    return(
      <div>
          {
            basic ? <Basic/> : '' || overflowCount ? <OverflowCount/> : '' || status ? <Status/> : '' ||
            dynamic ? <Dynamic/> : '' || redBadge ? <RedBadge/> :'' || clickable ? <Clickable/> : '' || standAlone ? <StandAlone/> :''
          }
      </div>
    )
  }
}
export default Badge;
