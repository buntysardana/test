import React, { useContext } from "react";
import { First } from "react-bootstrap/esm/PageItem";
import { myContext } from "./Usecontext";
const ComC = () => {
  const { firstName, lastName } = useContext(myContext);
  return (
    <>
      <h2 className="text-center pt-5">
        my name is {firstName}
        {lastName}
      </h2>
    </>
  );
};

export default ComC;
