import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import SliderWithIcon from "./SliderWithIcon";
import SliderWithNumber from "./SliderWithNumber";
import SliderWithDecimal from "./SliderWithDecimal";
import SliderCustomize from "./SliderCustomize";
import SliderEvent from "./SliderEvent";
import SliderGarduated from "./SliderGarduated";
import VerticalSlider from "./VerticalSlider";


class Slider extends Component {

  render() {
    const {
      basic,
      sliderWithIcon,
      sliderWithNumber,
      verticalSlider,
      sliderCustomize,
      sliderWithDecimal,
      sliderGarduated,
      sliderEvent
    } = this.props
    return (
      <div>
         {
           basic ? <Basic/> :  '' || sliderWithIcon ? <SliderWithIcon/> : '' || sliderWithNumber ? <SliderWithNumber/> : '' ||
           verticalSlider ? <VerticalSlider/> : '' || sliderCustomize ? <SliderCustomize/> : '' || sliderWithDecimal ? <SliderWithDecimal/> : '' ||
           sliderGarduated ? <SliderGarduated/> : ''  || sliderEvent ? <SliderEvent/> : ''
         }
      </div>
      
    );
  }
}


export default (Slider);
