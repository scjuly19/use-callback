import React from "react";

function Count(props) {
  console.log("Rendering " + props.text);
  return (
    <div>
      <p>{props.text + " " + props.count}</p>
    </div>
  );
}
export default React.memo(Count);
