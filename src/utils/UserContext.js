import { createContext } from "react";

const UserContext = createContext({
  loggedinUser: "default user",
  mode: "light",
});

export default UserContext;
