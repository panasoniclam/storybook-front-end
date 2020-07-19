import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import Placement from "./Placement";
import AsynchronousLoading from "./AsynchronousLoading";
import CustomizeSuggestions from "./CustomizeSuggestions";
import IconImage from "./IconImage";
import Controlled from "./Controlled";
import MultilineMode from "./MultilineMode";
import SuggestionContainer from "./SuggestionContainer";
import Disabled from "./Disabled";


class Mention extends Component {

  render() {
    const {
      basic,
      placement,
      asynchronousLoading,
      customizeSuggestions,
      controlled,
      multilineMode,
      suggestionContainer,
      iconImage,
      disabled
    } = this.props
    return (


      <div>
          {
               basic ? <Basic/> : ""  || placement ? <Placement/> : "" ||
               asynchronousLoading ? <AsynchronousLoading/> : "" ||
               customizeSuggestions ? <CustomizeSuggestions/> : "" ||
               iconImage ? <IconImage/> : "" ||
               controlled ? <Controlled/> : ""  || 
               multilineMode ? <MultilineMode/> : "" || suggestionContainer ? <SuggestionContainer/> : "" ||
               disabled ? <Disabled/> : ""
          }
      </div>
     
    );
  }

}


export default (Mention);
