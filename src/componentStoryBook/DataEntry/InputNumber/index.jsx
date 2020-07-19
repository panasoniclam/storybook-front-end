import React, {Component} from "react";
 

import Basic from "./Basic";
import Size from "./Size";
import Formatter from "./Formatter";
import Decimal from "./Decimal";
import Disabled from "./Disabled";
import { Row ,Col} from "antd";


class InputNumber extends Component {

  render() {
    const {
      basic,
      size,
      formatter,
      decimal,
      disabled
    } = this.props;
    return (

      <div>
        {
          basic ?   
          <Basic/> 
           : "" || size ? <Size/> : "" || formatter ? <Formatter/> : "" ||
          decimal ? <Decimal/> : "" || disabled ? <Disabled/> : ""
        }
      </div>
     
    );
  }

}


export default InputNumber;
