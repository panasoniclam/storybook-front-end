import React from "react";
import {Col, Row} from "antd";
import productData from "./productData";
import ProductItem from "./ProductItem";

function ProductsList() {
  return (
    <div className="gx-main-content">
      <Row>
        {productData.map((product, index) => (<Col span={24}>
            <ProductItem key={index} product={product}/>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductsList;
