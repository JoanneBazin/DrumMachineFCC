import React from "react";

const Pad = ({ id }, { key }, { audio }) => {
  <span className="drum-pad" id={id}>
    <audio src={audio}>{key}</audio>
  </span>;
};
export default Pad;
