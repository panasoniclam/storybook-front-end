import React from "react";
import Metrics from "components/Metrics";

const TotalSales = ({data}) => {
  const {number, title, icon} = data;
  return (
    <Metrics styleName="gx-card-center-vertical gx-card-eq-height gx-text-center">
      <h2>${number}</h2>
      <p className="gx-text-light">{title}</p>
      <img src={icon}/>
    </Metrics>
  );
};

export default TotalSales;

