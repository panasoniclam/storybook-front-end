import React from "react";
import {Card, Select} from "antd";

const Option = Select.Option;


class AutomaticCompletion extends React.Component {
  state = {
    options: [],
  };
  handleChange = (value) => {
    let options;
    if (!value || value.indexOf('@') >= 0) {
      options = [];
    } else {
      options = ['gmail.com', '163.com', 'qq.com'].map((domain) => {
        const email = `${value}@${domain}`;
        return <Option key={email}>{email}</Option>;
      });
    }
    this.setState({options});
  };

  render() {
    // filterOption needs to be false，as the value is dynamically generated
    return (
      <Card className="gx-card" title="Automatic Completion">
        <Select
          mode="combobox"
          style={{width: 200}}
          onChange={this.handleChange}
          filterOption={false}
          placeholder="Enter the account name"
        >
          {this.state.options}
        </Select>
      </Card>
    );
  }
}

export default AutomaticCompletion;
