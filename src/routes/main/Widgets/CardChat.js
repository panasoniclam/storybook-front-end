import React from "react";
import {Avatar} from "antd";

const CardChat = ({data}) => {
  const {image, msg} = data;
  return (
    <div className="gx-card-testimonial">
      <div className="gx-card-testimonial-img">
        <Avatar src={image} className="gx-size-50"/>
      </div>

      <div className="gx-card-testimonial-content">
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default CardChat;
