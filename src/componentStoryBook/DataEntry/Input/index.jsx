import React from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import ThreeSizesOfInput from "./ThreeSizesOfInput";
import PostTab from "./PostTab";
import SearchBox from "./SearchBox";
import InputGroups from "./InputGroups";
import AutosizingTheHeight from "./AutosizingTheHeight";
import TextArea from "./TextAreas";
import FormatTooltipInput from "./FormatTooltipInput";

class Input extends React.Component{
  render(){
    const {
      inputGroups,
      basic,
      threeSizesOfInput,
      postTab,
      searchBox,
      autosizingTheHeight,
      textArea,
      formatTooltipInput
    } = this.props;
    return(
      <div>
        {
            basic ?  <Basic/> : "" ||
         inputGroups ? <InputGroups/> : ""|| threeSizesOfInput ? <ThreeSizesOfInput/> : "" ||
           postTab ? <PostTab/> : "" || searchBox ? <SearchBox/> : "" || autosizingTheHeight ? <AutosizingTheHeight/> : "" ||
           textArea ? <TextArea/> : "" || formatTooltipInput ? <FormatTooltipInput/> : ""
        }
      </div>
    )
  }
}


export default (Input);
