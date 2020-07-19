import React, {Component} from "react";

import {AutoComplete, Card} from "antd";
 
 
class Basic extends Component {
  render() {
    const {value} = this.props
    return (
      <Card className="gx-card" title="ErrorStatus">
        <AutoComplete
          dataSource={ !value ? [] : [
            value,
            value + value,
            value + value + value,
          ]}
          value={value}
          style={{width: 200}}
          placeholder="input here"
        />
      </Card>
    );
  }
}
export default  (Basic);

