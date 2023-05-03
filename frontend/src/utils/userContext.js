import React, { createContext } from "react";

const userContext = createContext({
  user: {
    name: "dummyName",
    age: 23,
    email: "dummy@gmail.com",
  },
});

export default userContext;
