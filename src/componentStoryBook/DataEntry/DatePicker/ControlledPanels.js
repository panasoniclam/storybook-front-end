import React, {Component} from "react";
import {Card, DatePicker} from "antd";

class ControlledPanels extends Component {
  constructor(props){
    super(props)
    this.state={
      mode:'time'
    }
  }
  
  handleOpenChange(open){
    if (open) {
      this.setState({mode: 'time'});
    }
    this.handleOpenChange = this.handleOpenChange.bind(this);
    this.handlePanelChange = this.handleOpenChange.bind(this);
  };

  handlePanelChange(value, mode){
    this.setState({mode});
  };

  render() {
    return (
      <Card className="gx-card" title="Controlled Panels">
        <DatePicker className="gx-w-100"
                    mode={this.state.mode}
                    showTime
                    onOpenChange={this.handleOpenChange}
                    onPanelChange={this.handlePanelChange}
        />
      </Card>
    );
  }
}


export default ControlledPanels;






