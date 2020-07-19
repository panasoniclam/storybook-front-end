import { action } from '@storybook/addon-actions';
import React from 'react'
import { withKnobs, boolean, text ,radios} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
//component
import UploadClick from "./UploadClick";
import Avatar from "./Avatar";
import UploadDefault from "./UploadDefault";
import UploadPicture from "./UploadPicture";
import CompleteControl from "./CompleteControl";
import DragDrop from "./DragDrop";
import UploadListStyle from "./UploadListStyle";
const options = {
    UploadClick:'UploadClick',
    Avatar:'Avatar',
    UploadDefault:'UploadDefault',
    UploadPicture:'UploadPicture',
    CompleteControl:'CompleteControl',
    DragDrop:'DragDrop',
    UploadListStyle:'UploadListStyle'
}
storiesOf('Component   |  Upload'  ,module) 
    // .addDecorator(centered)
    .addDecorator(withKnobs)
    .add("basic",()=>{
        const value = radios("types",options);
        switch(value){
          case "UploadClick": return <UploadClick/>;
          case "Avatar": return <Avatar/>;
          case "UploadDefault": return <UploadDefault/>;
          case "UploadPicture": return <UploadPicture/>;
          case "CompleteControl": return <CompleteControl/>;
          case "DragDrop": return <DragDrop/>;
          case "UploadListStyle": return <UploadListStyle/>;
          default : break;
        }
      return 'well come to fpt telecom';
  },{
        notes:'A simple very component'
    })
  