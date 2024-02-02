import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();

  return (
    <div>
      <h1> OOPS ERROR PAGE!!!</h1>
      <h2>{err.data}</h2>
    </div>
  );
}

export default Error;
