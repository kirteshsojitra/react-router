import React from "react";
import {useSearchParams, useLocation} from "react-router-dom";

function SearchParams() {
  const [searchParams, setSearchParams] = useSearchParams({n: 3});
  const number = searchParams.get("n");

  return (
    <div className="App">
      <h1>{number}</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({n: e.target.value})}
      />
    </div>
  );
}

export default SearchParams;
