import React from "react";
import {Table} from "antd";

const columns = [
  {
    title: 'CUSTOMER',
    dataIndex: 'image',
    render: (text, record) => {
      return <div className="gx-flex-row gx-align-items-center">
        <img className="gx-rounded-circle gx-size-40 gx-mr-3" src={text} alt=""/>
        <p className="gx-mb-0">{record.name}</p>
      </div>
    },

  }, {
    title: 'ADDRESS',
    dataIndex: 'address',
  }, {
    title: 'ORDERED ON',
    dataIndex: 'ordered',
  }, {
    title: 'REFERRENCE',
    dataIndex: 'referrence',
  }, {
    title: 'STATUS',
    dataIndex: 'status',
    render: (text) => {
      return <span ><i
        className={`icon icon-circle gx-fs-sm gx-mr-3 ${text === 'Delivered' ? 'gx-text-red' : 'gx-text-cyan'}`}/>{text}</span>
    },
  },

];

const data = [{
  key: '1',
  name: 'Jeniffer L.',
  image: 'http://via.placeholder.com/150x150',
  address: '24, Jhalana Dungri, Jaipur',
  ordered: '09/25/2018',
  referrence: '#25543',
  status: 'Delivered'
}, {
  key: '2',
  name: 'Jim Green',
  image: 'http://via.placeholder.com/150x150',
  age: 42,
  ordered: '09/25/2018',
  referrence: '#25543',
  address: 'London No. 1 Lake Park',
  status: 'Pending'
}, {
  key: '3',
  name: 'Joe Black',
  image: 'http://via.placeholder.com/150x150',
  age: 32,
  ordered: '09/25/2018',
  referrence: '#25543',
  address: 'Sidney No. 1 Lake Park',
  status: 'Delivered'
}];


const CustomerList = () => {

  return (
    <div className="gx-table-responsive">
      <Table className="gx-table-padding-lg" columns={columns} dataSource={data}
             size="middle"/>
    </div>
  );
};
export default CustomerList;





