import React from "react";
import {Link, useLocation} from "react-router-dom";

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Link to="/" state={{name: "kirtesh"}}>
        LET'S check
      </Link>
      <h1>This is the home page.</h1>
    </div>
  );
};

export default Home;
