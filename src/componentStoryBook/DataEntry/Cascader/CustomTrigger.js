import React, {Component} from "react";
import {Card, Cascader} from "antd";

const options = [{
  value: 'menu',
  label: 'Menu',
  children: [{
    value: 'jumbo',
    label: 'jquery',
    children: [{
      value: 'opstion',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'menu',
  label: 'Menu 1',
  children: [{
    value: 'opstion 1',
    label: 'jumbo',
    children: [{
      value: 'opstion 2',
      label: 'react',
    }],
  }],
}];

class CustomTrigger extends Component {
  constructor(props){
    super(props)
    this.state = {
        text: 'Unselect'    
    }
    this.onChange = this.onChange.bind(this);
  }
    onChange  (value, selectedOptions)  {
      this.setState({
        text: selectedOptions.map(o => o.label).join(', '),
      });
    };
 
  render() {
    return (
      <Card className="gx-card" title="Custom Trigger">
        {this.state.text}
        &nbsp;
        <Cascader options={options} onChange={this.onChange}>
          <a href="javascript:void(0);">Change city</a>
        </Cascader>
      </Card>
    );
  }

}


export default CustomTrigger;
