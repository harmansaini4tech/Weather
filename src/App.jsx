import React from "react";
import SearchBar from "./Components/SearchBar";
import backgroundimage from "../public/images/background.jpg";

const App = () => {
  return (
    <>
      
      <div
        className="bg-image overflow-hidden "
        style={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundSize: "cover",
          // backgroundPosition: "center",
          height: "100vh", // Adjust height as needed
        }}
      >
        <h1 className="text-center text-white">Weather App</h1>
        <SearchBar />
      </div>
      
    </>
  );
};

export default App;
