import React from "react";
import { Dropdown } from "react-bootstrap";

//default values, these can be passed with props so all dropdown buttons are unique

const DropDownMenu = ({
  DropdownName,
  Action = "Action",
  Action2 = "Another Action",
  Action3 = "Something else",
  ActionClick,
  ActionClick2,
  ActionClick3,
  ActionPage = "#/action-1",
  ActionPage2 = "#/action-2",
  ActionPage3 = "#/action-3",
  style,
}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        className={style}
        variant="btn dropdown-toggle"
        id="dropdown-basic"
      >
        {DropdownName}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={ActionPage} onClick={ActionClick}>
          {Action}
        </Dropdown.Item>

        <Dropdown.Item href={ActionPage2} onClick={ActionClick2}>
          {Action2}
        </Dropdown.Item>
        <Dropdown.Item href={ActionPage3} onClick={ActionClick3}>
          {Action3}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownMenu;
