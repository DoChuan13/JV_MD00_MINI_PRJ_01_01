import * as Notify from "../../constants/messageType";

export const ready_buy = (message) => {
  return {
    type: Notify.NOTIFY_READY,
    payload: message,
  };
};

export const buy_success = (message) => {
  return {
    type: Notify.BUY_SUCCESS,
    payload: message,
  };
};

export const buy_failed = (message) => {
  return {
    type: Notify.BUY_FAILED,
    payload: message,
  };
};

export const pending_update = (value) => {
  return {
    type: Notify.PENDING_UPDATE,
    payload: value,
  };
};

export const update_success = (value) => {
  return {
    type: Notify.UPDATE_SUCCESS,
    payload: value,
  };
};

export const update_failed = (value) => {
  return {
    type: Notify.UPDATE_FAILED,
    payload: value,
  };
};

export const delete_success = (value) => {
  return {
    type: Notify.DELETE_SUCCESS,
    payload: value,
  };
};

export const cancelled_delete = (value) => {
  return {
    type: Notify.CANCELLED_DELETE,
    payload: value,
  };
};
