import React from "react";
import Settings from "../../settings";
import StarUsMessageDialog from "../StarUsMessageDialog/StarUsMessageDialog";
import { v4 as uuid } from "uuid";
const Onboard = () => {
  const [state, setState] = React.useState(Settings.landing());

  if (state) {
    return <StarUsMessageDialog key={uuid()} openTime={18000} />;
  } else {
    return <StarUsMessageDialog key={uuid()} openTime={6000} />;
  }
};

export default Onboard;
