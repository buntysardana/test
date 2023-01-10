import React, { useState } from "react";

const Formsection = () => {
  const [user, setuser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const handelinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setuser({ ...user, [name]: value });
  };
  const submitform = (e) => {
    e.preventDefault();
    console.log(user);
    setuser({
      username: "",
      email: "",
      phone: "",
      password: "",
    });
  };
  return (
    <>
      <form action="" className="text-center pt-5" onSubmit={submitform}>
        <div>
          <label className="d-block" htmlFor="username">
            username
          </label>
          <input
            type="text"
            autoComplete="off"
            value={user.username}
            onChange={handelinput}
            name="username"
            id="username"
          />
        </div>
        <div>
          <label className="d-block" htmlFor="email">
            email
          </label>
          <input
            type="text"
            autoComplete="off"
            value={user.email}
            onChange={handelinput}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label className="d-block" htmlFor="phone">
            phone
          </label>
          <input
            type="text"
            autoComplete="off"
            value={user.phone}
            onChange={handelinput}
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label className="d-block" htmlFor="password">
            password
          </label>
          <input
            type="text"
            autoComplete="off"
            value={user.password}
            onChange={handelinput}
            name="password"
            id="password"
          />
        </div>
        <button className="mt-3" type="submit">
          Registeration
        </button>
      </form>
    </>
  );
};

export default Formsection;
