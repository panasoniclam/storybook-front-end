import React from "react";
import {Col, Row} from "antd";
import ProductItem from "./ProductItem";
import productData from "./productData";
class ProductsGrid extends React.Component{
  render(){
    return(
      <Row>
      {productData.map((product, index) => (<Col xl={6} md={8} sm={12} xs={24}>
          <ProductItem key={index} grid product={product} />
        </Col>
      ))}
    </Row>
    )
  }
}
export default ProductsGrid;
