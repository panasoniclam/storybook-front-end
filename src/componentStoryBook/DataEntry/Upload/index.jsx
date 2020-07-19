import React, {Component} from "react";

import {Col, Row} from "antd";

import UploadClick from "./UploadClick";
import Avatar from "./Avatar";
import UploadDefault from "./UploadDefault";
import UploadPicture from "./UploadPicture";
import CompleteControl from "./CompleteControl";
import DragDrop from "./DragDrop";
import UploadListStyle from "./UploadListStyle";



class Upload extends Component {

  render() {
    const {
      uploadClick,
      avatar,
      uploadDefault,
      uploadPicture,
      completeControl,
      dragDrop,
      uploadListStyle
    } = this.props
    return (
      <div>
        {
          uploadClick  ? <UploadClick/> : '' || avatar ? <Avatar/> : '' ||
          uploadDefault ? <UploadDefault/> :'' || uploadPicture ? <UploadPicture/> :'' ||
          completeControl ? <CompleteControl/> :''|| dragDrop ? <DragDrop/> : '' ||
          uploadListStyle ? <UploadListStyle/> : ''
        }
      </div>
    );
  }
}


export default Upload;
