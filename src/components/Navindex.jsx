import React, { useState } from "react";

const Navindex = () => {
  const [index, setIndex] = useState(1);
  return (
    <>
      <section className=" bg-white min-vh-100 d-flex flex-column">
        <div className="container">
          <div className=" d-flex align-items-center justify-content-between pt-3 tabs">
            <button
              className={
                index === 1
                  ? " tabButton w-100"
                  : "bg-white w-100 border-0 py-5"
              }
              onClick={() => {
                setIndex(1);
              }}
            >
              First
            </button>
            <button
              className={
                index === 2
                  ? " tabButton w-100"
                  : "bg-white w-100 border-0 py-5"
              }
              onClick={() => {
                setIndex(2);
              }}
            >
              Second
            </button> 
            <button
              className={
                index === 3
                  ? " tabButton w-100"
                  : "bg-white w-100 border-0 py-5"
              }
              onClick={() => {
                setIndex(3);
              }}
            >
              Third
            </button>
          </div>
        </div>
        <div className=" flex-grow-1 d-flex align-items-center bg_para">
          <div className="container py-4">
            <div
              className={
                index === 1
                  ? "zIndex_1 w-100"
                  : "d-none zIndex_0 bg-white w-100 border-0 py-5"
              }
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
              voluptatum sint mollitia reprehenderit voluptatibus provident
              unde. Suscipit quidem nam optio voluptas eos. Dolore tempore ab,
              explicabo eius perspiciatis itaque cumque!
            </div>
            <div
              className={
                index === 2
                  ? "zIndex_1 w-100"
                  : "d-none zIndex_0 bg-white w-100 border-0 py-5"
              }
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
              voluptatum sint mollitia reprehenderit voluptatibus provident
              unde. Suscipit quidem nam optio voluptas eos. Dolore tempore ab,
              explicabo eius perspiciatis itaque cumque! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Aliquam, voluptatum sint
              mollitia reprehenderit voluptatibus provident unde. Suscipit
              quidem nam optio voluptas eos. Dolore tempore ab, explicabo eius
              perspiciatis itaque cumque!
            </div>
            <div
              className={
                index === 3
                  ? "zIndex_1 w-100"
                  : "d-none zIndex_0 bg-white w-100 border-0 py-5"
              }
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
              voluptatum sint mollitia reprehenderit voluptatibus provident
              unde. Suscipit quidem nam optio voluptas eos. Dolore tempore ab,
              explicabo eius perspiciatis itaque cumque! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Aliquam, voluptatum sint
              mollitia reprehenderit voluptatibus provident unde. Suscipit
              quidem nam optio voluptas eos. Dolore tempore ab, explicabo eius
              perspiciatis itaque cumque! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Aliquam, voluptatum sint mollitia
              reprehenderit voluptatibus provident unde. Suscipit quidem nam
              optio voluptas eos. Dolore tempore ab, explicabo eius perspiciatis
              itaque cumque! Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Aliquam, voluptatum sint mollitia reprehenderit voluptatibus
              provident unde. Suscipit quidem nam optio voluptas eos. Dolore
              tempore ab, explicabo eius perspiciatis itaque cumque!
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navindex;
