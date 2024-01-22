import React from "react";
import Settings from "../../settings";
import StarUsMessageDialog from "../StarUsMessageDialog/StarUsMessageDialog";
import { v4 as uuid } from "uuid";
//TODO: MOVE WIDGET
const Onboard = () => {
  const [state] = React.useState(Settings.landing());

  console.debug(state.level); //shows the value of the level state.

  switch (state.level) {
    case 0:
      return (
        <StarUsMessageDialog key={uuid()} openTime={6000} level={state.level} />
      );

    case 1:
      return (
        <StarUsMessageDialog
          key={uuid()}
          openTime={18000}
          level={state.level}
        />
      );
    case 2:
      return null;
    default:
      return null;
  }
};

export default Onboard;
