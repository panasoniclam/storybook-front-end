import React from "react";
import {Col, Row} from "antd";

import "./index.less";
import Basic from "./Basic";
import Vertical from "./Vertical";
import FadeIn from "./FadeIn";
import ScrollAutomatically from "./ScrollAutomatically";

class Carousel extends React.Component{
    render(){
        const {
            basic,
            vertical,
            fadeIn,
            scrollAutomatically,
            
        } =this.props
        return(
            <div>
              {
                  basic ? <Basic/> : '' || vertical ? <Vertical/> :'' ||
                  fadeIn ? <FadeIn/> :'' || scrollAutomatically ? <ScrollAutomatically/> : ''  
              }
            </div>
        )
    }
}
 

export default Carousel;
