import React from "react";

import Widget from "components/Widget";
import {ticketList} from "./data";
import TicketItem from "./TicketItem";

class TicketList extends React.Component {

  render() {
    return (
      <Widget title="recent tickets" styleName="gx-card-ticketlist gx-card-eq-height"
              extra={<span className="gx-btn gx-btn-sm gx-btn-primary">SEE ALL</span>}>
        {
          ticketList.map((ticket, index) => <TicketItem key={index} data={ticket}/>)
        }
      </Widget>
    );
  }
}


export default TicketList;
