import React, {Component} from "react";
 

import Basic from "./Basic";
import Disabled from "./Disabled";
import HorizontalRadio from "./HorizontalRadio";
import VerticalRadio from "./VerticalRadio";
import OptionalRadio from "./OptionalRadio";
import StyleRadio from "./StyleRadio";
import SizeRadio from "./SizeRadio";


class Radio extends Component {
    
  render() {
    const {
      basic,
      disabled,
      horizontalRadio,
      verticalRadio,
      optionalRadio,
      styleRadio,
      sizeRadio
    } =this.props
    return (

      <div>
        {
          basic ?      <Basic/> : "" || disabled ? <Disabled/> : "" ||
          horizontalRadio ? <HorizontalRadio/> : "" || verticalRadio ? <VerticalRadio/> : "" ||
          optionalRadio ? <OptionalRadio/> : "" || styleRadio ? <StyleRadio/> :"" ||
          sizeRadio ? <SizeRadio/> : ""
        }
      </div>
     
    );
  }

}


export default Radio;
