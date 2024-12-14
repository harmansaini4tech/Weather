import React from "react";
import SearchBar from "./Components/SearchBar";
import backgroundimage from "../public/images/background.jpg";

const App = () => {
  return (
    <>
      <div>
        <img
          src={backgroundimage}
          className="h-100 w-100 position-absolute z-n1 "
        />
      </div>
      <SearchBar />
    </>
  );
};

export default App;
