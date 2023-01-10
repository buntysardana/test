import React from "react";

const PreLoader = () => {
  return (
    <>
      <div className="vh-100 w-100 bg-black position-fixed top-0 left-0 z_index_99 d-flex justify-content-center align-items-center">
        <p className="text-white">Loading.....</p>
      </div>
    </>
  );
};

export default PreLoader;
