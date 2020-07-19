import React from "react";
import {Avatar} from "antd";
import Widget from "components/Widget/index";

const CardMessageCall = () => {
  return (
    <Widget
      actions={[<span><i className="gx-mail-open gx-text-red gx-mr-2"/>Message</span>,
        <span><i className="gx-phone gx-text-red gx-mr-2"/>Call</span>]}
    >
      <div className="gx-text-center">
        <Avatar className="gx-size-60 gx-mb-3" src='http://via.placeholder.com/150x150'/>
        <div className="gx-mb-3">
          <h3>Christina Johnson</h3>
        </div>
        <ul className="gx-list-inline">
          <li><Avatar src='http://via.placeholder.com/150x150' size='small'/></li>
          <li><Avatar src='http://via.placeholder.com/150x150' size='small'/></li>
          <li><Avatar src='http://via.placeholder.com/150x150' size='small'/></li>
        </ul>
      </div>
    </Widget>
  );
};

export default CardMessageCall;
