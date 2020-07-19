import React from "react";
import Widget from "components/Widget/index";

const Ecommerce = () => {

  return (

    <Widget styleName="gx-card-img gx-card-img-center gx-card-body-border-top gx-card-eq-height" hoverable
            cover={
            <img alt="example" src={'http://via.placeholder.com/162x190'}/>
          }>
      <div className="ant-row-flex ant-row-flex-space-between gx-mb-2">
        <div>
          <h3>Adidas</h3>
          <p className="gx-text-light gx-mb-0">Main's T-shirt</p>
        </div>
        <div className="gx-text-red">
          <p>$20.00</p>
        </div>
      </div>
      <div className="gx-flex-row gx-align-items-center gx- gx-mb-2">
        <span className="gx-font-weight-medium gx-minw50">Size</span><span className="gx-text-uppercase gx-text-light">xs, s, m, l, xl, xxl </span>
      </div>
      <div className="gx-flex-row gx-align-items-center gx-mb-2">
        <span className="gx-font-weight-medium gx-minw50">Color</span>
        <ul className="gx-list-inline gx-mb-0">
          <li>
            <i className="icon icon-circle gx-fs-md gx-text-amber"/>
          </li>
          <li>
            <i className="icon icon-circle gx-fs-md gx-text-success"/>
          </li>
          <li>
            <i className="icon icon-circle gx-fs-md gx-text-danger"/>
          </li>
          <li>
            <i className="icon icon-circle gx-fs-md gx-text-purple"/>
          </li>
          <li>
            <i className="icon icon-circle gx-fs-md gx-text-primary"/>
          </li>
        </ul>
      </div>
    </Widget>
  );
};

export default Ecommerce;
