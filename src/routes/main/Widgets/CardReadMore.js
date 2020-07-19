import React from "react";
import {Button} from "antd";
import Widget from "components/Widget/index";

const CardReadMore = ({data}) => {
  const {image, title, desc, name, comments} = data;
  return (

    <Widget className="gx-card-img gx-card-eq-height" hoverable
            cover={
              <img alt="example" src={image}/>
            }>
      <h4>{title}</h4>
      <p className="gx-text-light">{desc}</p>
      <div className="ant-row-flex ant-row-flex-space-between gx-mb-3 gx-text-light">
        <div>
          <p><i className="icon icon-user gx-text-red gx-mr-2"/>{name}</p>
        </div>
        <div>
          <p><i className="icon icon-chat gx-text-red gx-mr-2"/> {comments}</p>
        </div>
      </div>
      <div className="gx-text-center">
        <Button className="gx-btn-red">Read More</Button>
      </div>
    </Widget>
  );
};

export default CardReadMore;
