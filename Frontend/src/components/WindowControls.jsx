import useWindowStore from "@store/windows";
import React from "react";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      {/* #TODO:Add maximize and Minmize functionality */}
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};

export default WindowControls;
