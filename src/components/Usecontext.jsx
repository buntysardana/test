import { createContext } from "react";

export const myContext = createContext();

const Usecontext = ({ children }) => {
  const firstName = "bunty";
  const lastName = " sardana";
  return (
    <myContext.Provider value={{ firstName, lastName }}>
      {children}
    </myContext.Provider>
  );
};

export default Usecontext;
