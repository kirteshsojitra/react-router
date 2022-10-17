import React from "react";
import {Routes, Route, Link, useRoutes, useLocation} from "react-router-dom";
import Home from "./components/Home";
import BookList from "./components/BookList";
import Book from "./components/Book";
import NewBook from "./components/NewBook";
import NotFound from "./components/NotFound";
import BookLayOut from "./components/BookLayOut";
import OtherLayout from "./components/OtherLayout";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import SearchParams from "./components/SearchParams";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/books",
      children: [
        {index: true, element: <BookList />},
        {path: ":id", element: <Book />},
        {path: "new", element: <NewBook />},
      ],
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "/searchparams",
      element: <SearchParams />,
    },
  ]);

  const location = useLocation();
  console.log(location);
  return element;
}

export default App;
