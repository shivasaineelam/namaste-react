import React, { useEffect, useState } from "react";
let User = ({ name, location, college }) => {
  let [count, setcount] = useState(0);
  let [count1, setcount1] = useState(1);
  useEffect(() => {
    console.log("c useEffect called");
  }, []);
  console.log("c instialation called");
  return (
    <div className="aboutf">
      {console.log("c render called")}
      <button
        className="btnf"
        onClick={() => {
          setcount(count + 1);
          setcount1(count1 + 1);
        }}
      >
        {" "}
        click me for states{" "}
      </button>
      <h1>count={count}</h1>
      <h1>count1={count1}</h1>
      <h1>Name: {name}</h1>
      <h1>Location: {location}</h1>
      <h1>College: {college}</h1>
    </div>
  );
};

export default User;
