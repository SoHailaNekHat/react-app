import React from "react";
import user from "../images/user1.png";

const ContactCard = (props) => {
  const {id , name, email} =props.contact;
  return (
     <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
        <i className="trash alternate outline icon red" style={{ marginTop: "7px" }}></i>
      </div>
  );
};


export default ContactCard;