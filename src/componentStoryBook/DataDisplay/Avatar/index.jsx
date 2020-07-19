import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Type from "./Type";
import AutosetSize from "./AutosetSize";
import WithBadge from "./WithBadge";

class Avatar extends React.Component{
  render(){
    const {
      basic,
      type,
      autosetSize,
      withBadge

    } = this.props
    return(
      <div>
      {
        basic ? <Basic/> : '' || type ? <Type/> :'' || autosetSize ? <AutosetSize/> : '' ||
        withBadge ? <WithBadge/> : '' 
      }
      </div>
    )
  }
}
 

export default Avatar;
