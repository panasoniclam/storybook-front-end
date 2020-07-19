import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import NoticeCalendar from "./NoticeCalendar";
import CalendarCard from "./CalendarCard";
import SelectableCalendar from "./SelectableCalendar";

class Calendar extends React.Component{
  render(){
    const {
      basic,
      noticeCalendar,
      selectableCalendar,
      calendarCard
    } = this.props
    return(
      <div>
        {
          basic ? <Basic/> : '' || noticeCalendar ? <NoticeCalendar/> :'' || selectableCalendar ? <SelectableCalendar/> :''||
          calendarCard ? <CalendarCard/> :''
        }
      </div>
    )
  }
}

export default Calendar;
