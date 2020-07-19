import React from "react";
import {Badge, Button, Divider, Icon} from "antd";
import Widget from "components/Widget/index";


const CardFavourite = ({data}) => {
  const {image, title, address, rooms, size, prize} = data;
  return (
    <Widget styleName="gx-card-img gx-card-eq-height" hoverable
            cover={
              <img alt="example" src={image}/>
            }>
      <Badge className="gx-badge-up gx-bg-red gx-text-white"> <i className="icon icon-user"/> </Badge>
      <h4>{title}</h4>

      <div className="gx-mb-3">
        <p className="gx-text-light"><Icon className="gx-text-red gx-mr-2" type="environment"/>{address}</p>
      </div>
      <ul className="gx-ant-card-actions gx-text-light">
        <li>{rooms}</li>
        <li>{"   " + size}</li>
      </ul>
      <Divider className="gx-my-lg-4"/>
      <div className="gx-flex-row gx-justify-content-between gx-align-items-center">
        <p><span className="h1">{prize}</span><span className="gx-text-light"> {"" + "/year"}</span></p>
        <Button className="gx-btn-red">Read More</Button>
      </div>
    </Widget>
  );
};

export default CardFavourite;
