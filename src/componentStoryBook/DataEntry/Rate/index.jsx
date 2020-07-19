import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import HalfStar from "./HalfStar";
import ShowCopywrite from "./ShowCopywrite";
import ReadOnly from "./ReadOnly";
import ClearStar from "./ClearStar";
import OtherCharactor from "./OtherCharactor";


class Rate extends Component {


  render() {
    const {
      basic,
      halfStar,
      otherCharactor,
      readOnly,
      clearStar,
      showCopywrite
    } = this.props
    return (

    <div>
      {
        basic ? <Basic/> : "" || halfStar ? <HalfStar/> : "" || otherCharactor ? <OtherCharactor/> : "" || 
        readOnly ? <ReadOnly/> : "" || clearStar ? <ClearStar/> : ""||
        showCopywrite ? <ShowCopywrite/> : ""
      }
    </div>
 
    );
  }

}


export default Rate;
