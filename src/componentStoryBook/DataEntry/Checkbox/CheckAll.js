import React, {Component} from "react";
import {Card, Checkbox} from "antd";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];


class CheckAll extends Component {
  constructor(props){
    super(props);
    this.state={
        checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
    }
    this.onChange =  this.onChange.bind(this);
    this.onCheckAllChange =  this.onCheckAllChange.bind(this);
  }
  

  render() {
    return (
      <Card className="gx-card" title="CheckAll">
        <div className="gx-border-bottom gx-pb-3 gx-mb-3">
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange}/>
      </Card>
    );
  }

  onChange (checkedList){
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }
  onCheckAllChange(e){
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }
}


export default CheckAll;







