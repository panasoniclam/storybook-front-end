import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import TimePickerSize from "./TimePickerSize";
import Disabled from "./Disabled";
import IntervalOption from "./IntervalOption";
import Addon from "./Addon";
import Hour from "./Hour";
import HourMinute from "./HourMinute";


class TimePicker extends Component {

  render() {
    const { 
      basic,
      timePickerSize,
      disabled,
      addon,
      hour,
      hourMinute
    } = this.props
    return (
      <div>
        {
          basic ? <Basic/> : '' || timePickerSize ? <TimePickerSize/> :'' || disabled ? <Disabled/> :'' ||
          addon ? <Addon/> : ''  || hour ? <Hour/> : '' || hourMinute ? <HourMinute/> : ''
         }
      </div>
    );
  }
}


export default TimePicker;
