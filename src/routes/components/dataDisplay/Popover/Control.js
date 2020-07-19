import React from "react";
import {Button, Card, Popover} from "antd";


class Control extends React.Component {
  state = {
    visible: false,
  };
  hide = () => {
    this.setState({
      visible: false,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({visible});
  };

  render() {
    return (
      <Card className="gx-card" title="Control">
        <Popover
          content={<a onClick={this.hide}>Close</a>}
          title="Title"
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
        >
          <Button type="primary">Click me</Button>
        </Popover>
      </Card>
    );
  }
}


export default Control;
