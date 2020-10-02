import React from "react";
import { ListGroup } from "react-bootstrap";
import MeetingData from "./meetingdata.jsx";

//Values here can be passed as props as well, but it's hardcoded for now

const Meetings = () => {
  return (
    <div className="meet-box">
      <div className="meet-nav">
        <div className="meet-title">Latest Signups</div>
        <div className="meet-semititle">
          <div className="left">Name</div>
          <div className="right">Scheduled Meeting</div>
        </div>
      </div>
      <ListGroup>
        <MeetingData
          name="David Hansen"
          schedule="02-03-2020 - 2PM"
          box="cyan-box"
        ></MeetingData>
        <MeetingData
          name="Shopify"
          schedule="05-03-2020 - 10:30AM"
          box="pink-box2"
        ></MeetingData>
        <MeetingData
          name="Arvid, Realtree AB"
          schedule="05-03-2020 - 3PM"
          box="pink-box2"
        ></MeetingData>
      </ListGroup>
    </div>
  );
};

export default Meetings;
