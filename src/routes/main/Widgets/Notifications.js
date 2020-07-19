import React from "react";
import {Avatar, List} from "antd";

const Notifications = ({data}) => {

  return (

    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item className="gx-list-item" extra={<img alt="" src={item.image}/>}>
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} size='large'/>}
            title={<a href="https://ant.design">{item.name}</a>}
            description={item.desc}
          />


        </List.Item>
      )}
    />

  );
};
export default Notifications;





