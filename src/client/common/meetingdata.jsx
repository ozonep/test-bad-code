import React from "react";
import { ListGroup } from "react-bootstrap";

const MeetingData = ({ name, schedule, box }) => {
  return (
    <ListGroup.Item className="listItem">
      <div>
        <div className={box + " left"}></div>
        <span className="left">{name}</span>
        <span className="right">{schedule}</span>
      </div>
    </ListGroup.Item>
  );
};

export default MeetingData;
