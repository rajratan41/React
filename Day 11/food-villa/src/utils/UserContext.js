import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Raj Ratan",
    email: "dummy@gmail.com",
  },
});

export default UserContext;
