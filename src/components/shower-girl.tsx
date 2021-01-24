import React, { useState } from "react";
import "./shower-girl.scss";

const ShowerGirl = () => {
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setright] = useState(0);
  return (
    <div
      className="girl"
      style={{ top: top, bottom: bottom, left: left, right: right }}
      onClick={(e) => console.log(e)}
      onDrag={(e) => {
        console.log(e);
        console.log(e.nativeEvent.offsetY, e.nativeEvent.offsetX);
        if (e.dataTransfer.dropEffect !== "none") {
          if (e.nativeEvent.offsetY > 0) {
            setTop(e.nativeEvent.offsetY);
          } else {
            setBottom(e.nativeEvent.offsetY * -1);
          }
          if (e.nativeEvent.offsetX > 0) {
            setright(e.nativeEvent.offsetX);
          } else {
            setLeft(e.nativeEvent.offsetX * -1);
          }
        }
      }}
      draggable="true"
    ></div>
  );
};

export default ShowerGirl;
