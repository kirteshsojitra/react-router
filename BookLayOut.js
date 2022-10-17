import React from "react";
import {Link, Outlet} from "react-router-dom";
const BookLayOut = () => {
  return (
    <div>
      <Link to="/books/1">Book 1</Link>
      <Link to="/books/2">Book 2</Link>
      <Link to="/books/new">New Book</Link>
      <Outlet context={{hello: "world"}} />
    </div>
  );
};

export default BookLayOut;
