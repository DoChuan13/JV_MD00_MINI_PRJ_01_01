import * as constantMessage from "../../../constants/messageType";
const initialState = constantMessage.NOTIFY_READY;

const notify = (state = initialState, action) => {
  switch (action.type) {
    case constantMessage.NOTIFY_READY:
      return (state = action.payload);

    case constantMessage.BUY_SUCCESS:
      return (state = action.payload);

    case constantMessage.BUY_FAILED:
      return (state = action.payload);

    case constantMessage.PENDING_UPDATE:
      return (state = action.payload);

    case constantMessage.UPDATE_SUCCESS:
      return (state = action.payload);

    case constantMessage.UPDATE_FAILED:
      return (state = action.payload);

    case constantMessage.DELETE_SUCCESS:
      return (state = action.payload);

    case constantMessage.CANCELLED_DELETE:
      return (state = action.payload);

    default:
      return state;
  }
};

export default notify;
