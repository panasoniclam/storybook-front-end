import React, {Component} from "react";
import {Button, Card, Checkbox} from "antd";

class ControlledCheckbox extends Component {
  constructor(props){
    super(props)
    this.state={ 
      checked: true,
    disabled: false,

    }
    this.toggleChecked = this.toggleChecked.bind(this);
    this.toggleDisable = this.toggleDisable.bind(this);
   
  }

  render() {
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;
    return (
      <Card className="gx-card gx-card" title="ControlledCheckbox">
        <p style={{marginBottom: '20px'}}>
          <Checkbox
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
            {label}
          </Checkbox>
        </p>
        <p>
          <Button
            type="primary"
            size="small"
            onClick={this.toggleChecked}
          >
            {!this.state.checked ? 'Check' : 'Uncheck'}
          </Button>
          <Button
            style={{marginLeft: '10px'}}
            type="primary"
            size="small"
            onClick={this.toggleDisable}
          >
            {!this.state.disabled ? 'Disable' : 'Enable'}
          </Button>
        </p>
      </Card>
    );
  }

  toggleChecked(){
    this.setState({checked: !this.state.checked});
  }
  toggleDisable  (){
    this.setState({disabled: !this.state.disabled});
  }
  onChange(e){
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  }

}


export default ControlledCheckbox;
