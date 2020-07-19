import React from "react";
import {Avatar, Card} from "antd";

const CardProjectDetail = () => {
  return (
    <Card className="gx-card-eq-height">
      <div className="gx-text-center">
        <Avatar className="gx-size-100 gx-mb-3" src='http://via.placeholder.com/150x150'/>
        <h3>Christina Johnson</h3>
        <div className="gx-text-light">
          <p>@christnajjohn</p>
          <p>Hi, I am Christina Johnson.</p>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>
      </div>

      <ul className="gx-list-inline-lg gx-flex-row gx-justify-content-between gx-mt-3">
        <li><h3>34</h3>
          <p className="gx-text-light gx-mb-1">Projects</p>
        </li>
        <li>
          <h3>34</h3>
          <p className="gx-text-light gx-mb-1">Projects</p>
        </li>
        <li>
          <h3>626</h3>
          <p className="gx-text-light gx-mb-1">Clients</p>
        </li>
      </ul>
    </Card>
  );
};

export default CardProjectDetail;
