import React, { useState } from "react";
import {
  UncontrolledPopover,
  Button,
  PopoverHeader,
  PopoverBody
} from "reactstrap";

const PopupItem = props => {
  const [popover, setPopover] = useState(false);

  const toggle = () => {
    setPopover(!popover);
  };

  return (
    <div className="container">
      <Button
        color="link"
        id={"Popover-" + props.book.id}
        onClick={toggle}
        style={{ marginBottom: "1rem", marginLeft: "-1rem" }}
      >
        {props.book.title}
      </Button>
      <UncontrolledPopover
        placement="right"
        isOpen={popover}
        target={"Popover-" + props.book.id}
        toggle={toggle}
        trigger="legacy"
      >
        <PopoverHeader>{props.book.title}</PopoverHeader>
        <PopoverBody>{props.book.summary}</PopoverBody>
      </UncontrolledPopover>
    </div>
  );
};

export default PopupItem;
