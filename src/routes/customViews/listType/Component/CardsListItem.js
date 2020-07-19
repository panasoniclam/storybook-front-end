import React from "react";

function CardsListItem({styleName, data}) {
  const {image, image2, name, description} = data;
  return (
    <div className={`gx-user-list ${styleName}`}>
      <img alt="..." src={image} className="gx-avatar-img gx-avatar-img-lg gx-border-0"/>
      <div className="gx-description">
        <h3>{name}</h3>
        <p>{description}</p>
        <ul className="gx-list-inline gx-btn-list">
          <li>
            <a className="gx-btn gx-btn-light gx-btn-rounded" href="javascript:void(0);">Hire Me</a>
          </li>
          <li>
            <a className="gx-btn gx-btn-light gx-btn-rounded" href="javascript:void(0);">Message</a>
          </li>
        </ul>
      </div>

      <div className="gx-img-section">
        <img className="gx-img-fluid" src={image2} alt="..."/>
      </div>
    </div>


  );
}

export default CardsListItem;
