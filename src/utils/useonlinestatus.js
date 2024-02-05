import { useState } from "react";

function useonlinestatus() {
  const [value, setvalue] = useState("true");
  window.addEventListener("online", () => {
    setvalue("true");
  });
  window.addEventListener("offline", () => {
    setvalue("false");
  });
  return value;
}

export default useonlinestatus;
