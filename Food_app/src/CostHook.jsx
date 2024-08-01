import React from "react";

function usePrint() {
  let print = "mode";
  let setPrint = () => {
    print = "active";
  };
  console.log(print, "value of print currently");
  return [print, setPrint];
}
export default usePrint;
