import React, {Component} from "react";
import {AutoComplete, Card, Input} from "antd";

const {TextArea} = Input;
class CustomizeInputComponent extends Component {
  render() {
     const {  value} = this.props;
    return (
      <Card className="gx-card" title="Customize Input Component">
        <AutoComplete
           dataSource={ !value ? [] : [
            value,
            value + value,
            value + value + value,
          ]}
          style={{width: 200}}
           
        >
        <TextArea
          placeholder="input here"
          className="custom"
          style={{height: 50}}
        />
        </AutoComplete>
      </Card>
    );
  }

}

export default CustomizeInputComponent;

