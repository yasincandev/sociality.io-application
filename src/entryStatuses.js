import cancelIcon from "./assets/card-actions/cancel.png";
import approveIcon from "./assets/card-actions/approve.png";

const entryStatuses = {
  0: {
    label: "Need Approval",
    color: "#F7BF38",
    approve: approveIcon,
  },
  1: {
    label: "Scheduled",
    color: "#3AC183",
    cancel: cancelIcon,
  },

  2: {
    label: "Publishing",
    color: "#67B1F2",
  },

  3: {
    label: "Published",
    color: "#ACACAC",
  },

  4: {
    label: "Error",
    color: "#FB6450",
  },
};

export default entryStatuses;

/*   0 for Need Approval, 
  1 for Scheduled, 
  2 for Publishing, 
  3 for Published, 
  4 for Error */
