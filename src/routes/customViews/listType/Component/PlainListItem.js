import React from "react";


function PlainListItem({styleName, data}) {
  const {image, name, work, like, comments, description} = data;
  return (
    <div className="gx-user-list">
      <img alt="avatar" src={image} className="gx-avatar-img gx-avatar-img-lg gx-border-0"/>
      <div className="gx-description">
        <h3>{name}</h3>
        <h5>in <a className="gx-font-weight-medium" href="javascript:void(0);">{work}</a></h5>
        <p>{description}</p>
        <ul className="gx-list-inline gx-btn-list">
          <li>
            <a className="gx-meta-like" href="javascript:void(0);">
              <i className="icon icon-favorite gx-text-red"/>
              {like}
            </a>
          </li>
          <li >
            <a className="gx-meta-comment" href="javascript:void(0);">
              <i className="icon icon-message"/>
              {comments}
            </a>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default PlainListItem;
