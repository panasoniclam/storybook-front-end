import React, {Component} from "react";
import {Col, Row} from "antd";

import Basic from "./Basic";
import SeclectSize from "./SelectSize";
import SearchField from "./SearchField";
import SelectTag from "./SelectTag";
import SelectMultiple from "./SelectMultiple";
import SelectOption from "./SelectOption";
import SelectCoordinate from "./SelectCoordinate";
import WithValue from "./WithValue";
import AutomaticCompletion from "./AutomaticCompletion";


class Select extends Component {

  render() {
    const {
      basic,
      searchField,
      selectTag,
      selectMultiple,
      selectOption,
      selectCoordinate,
      seclectSize
    } =this.props
    return (

       <div>
         {
           basic ? <Basic/> : '' || searchField ? <SearchField/> : '' || selectTag ? <SelectTag/> : '' || selectMultiple ? <SelectMultiple/> : '' ||
           selectOption ? <SelectOption/> : '' || selectCoordinate ? <SelectCoordinate/> : '' || seclectSize ? <SeclectSize/> : ''
         }
       </div>
    );
  }

}


export default Select;
