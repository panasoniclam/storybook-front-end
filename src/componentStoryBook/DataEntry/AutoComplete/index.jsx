import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Customized from "./Customized";
import CustomizeInputComponent from "./CustomizeInputComponent";
import NonCaseSensitiveAutoComplete from "./NonCaseSensitiveAutoComplete";
import LookupPatterns from "./LookupPatterns";
 
 
class Index  extends React.Component{
  render(){
    const {value,basic,customized, dataSource,customizeInputComponent,nonCaseSensitiveAutoComplete,lookupPatterns} = this.props
    return (
    // <Row>
    //   <Col lg={12} md={12} sm={24} xs={24}>
        // <Basic/>
    //     <Customized/>
    //     <CustomizeInputComponent/>
    //   </Col>
    //   <Col lg={12} md={12} sm={24} xs={24}>
    //     <NonCaseSensitiveAutoComplete/>
    //     <LookupPatterns/>
    //   </Col>
    // </Row>
      // <Customized value={value}/> 
      <div>
         {basic ? <Basic value={value} dataSource={dataSource}/> : "" || 
         customized ? <Customized  value={value}  />  : "" ||
          customizeInputComponent ?  <CustomizeInputComponent value={value}/> : "" || nonCaseSensitiveAutoComplete ? <NonCaseSensitiveAutoComplete/> : ""
          || lookupPatterns ?  <LookupPatterns/> : ""
          } 
      </div>
     
 
    )
  }
};

export default Index;
