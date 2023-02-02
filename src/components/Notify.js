import React from "react";
import * as Selector from "../redux/selectors/selector";
import * as constantMessage from "../constants/messageType";
import { useSelector } from "react-redux";

function Notify() {
  let notify = useSelector(Selector.notify);
  let status;
  if (
    notify === constantMessage.BUY_FAILED ||
    notify === constantMessage.UPDATE_FAILED
  ) {
    status = {
      backgroundColor: "red",
      color: "white",
    };
  }
  if (notify === constantMessage.PENDING_UPDATE) {
    status = {
      backgroundColor: "yellow",
      color: "black",
    };
  }

  if (notify === constantMessage.CANCELLED_DELETE) {
    status = {
      backgroundColor: "gray",
      color: "white",
    };
  }

  if (notify)
    return (
      <div
        className="alert alert-success"
        style={status}
        role="alert"
        id="mnotification"
      >
        {notify}
      </div>
    );
}

export default Notify;
