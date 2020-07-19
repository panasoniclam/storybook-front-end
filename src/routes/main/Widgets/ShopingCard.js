import React from "react";
import Widget from "components/Widget/index";

const ShopingCard = () => {

  return (

    <Widget styleName="gx-card-img gx-card-img-center gx-card-body-border-top" hoverable
            cover={
            <img alt="example" src={'http://via.placeholder.com/212x248'}/>
          }>
      <div className="ant-row-flex ant-row-flex-space-between">
        <div>
          <h3>Adidas</h3>
          <p className="gx-text-light gx-mb-0">Main's T-shirt</p>
        </div>
        <div className="gx-text-red">
          <p>$20.00</p>
        </div>
      </div>

    </Widget>
  );
};

export default ShopingCard;
