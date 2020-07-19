import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Search from "./Search";
import Advance from "./Advance";
import CustomData from "./CustomData";


class Transfer extends Component {
  render() {
    const { 
      advance,
      customData,
      basic,
      search
    } = this.props
    return (
      <div>
        {
          advance ? <Advance/> : '' || customData ? <CustomData/> : '' || basic ? <Basic/> : '' || search ? <Search/> : ''
        }
      </div>
    );
  }
}


export default Transfer;
