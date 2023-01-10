import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Practice from "./components/Practice";
// import Rest from "./components/Rest";
// // import Form from "./components/Form";
// import Nav from "./components/Nav";
// import Navindex from "./components/Navindex";
import Usecontext from "./components/Usecontext";
import { useState, useEffect } from "react";
import PreLoader from "./components/PreLoader";
import ComC from "./components/ComC";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("fix-screen");
    }, 2400);
  }, []);
  return (
    <>
      {loading && <PreLoader />}
      {/* <Nav /> */}
      {/* <Rest /> */}
      <Practice />
      {/* <Form /> */}
      {/* <Navindex /> */}
      <ComC />
    </>
  );
}

export default App;
