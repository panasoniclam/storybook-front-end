import React from "react";
import {Card} from "antd";

const LoadingCard = () => {
  return (
    <Card loading title="Card title" className="gx-card-eq-height">
      Whatever content
    </Card>
  );
};

export default LoadingCard;
