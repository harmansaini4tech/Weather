import React from "react";

const InformationWeather = ({ data }) => {
  console.log("yes", data);
  return (
    <div className="row bg-opacity-25 d-flex justify-content-center align-items-center pt-2">
      <div
        style={{
          height: "500px",
          boxShadow:
            "4px 4px 8px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
        className="col-10 col-md-8 col-lg-8 rounded-4 d-flex align-items-center flex-sm-row flex-column p-2 "
      >
        <div className="left h-50 h-lg-100 col-12 col-md-6 col-lg-6  d-flex justify-content-center align-items-center">
          <img src={data.image} className="h-100" />
        </div>
        <div className="right h-50 h-lg-100 col-12 col-md-6 col-lg-6 d-flex justify-content-center flex-column lh-sm p-2">
          <span className="mt-5 fs-lg-3">Today</span>
          <h1 className="fw-bolder">New York</h1>
          <p className="fs-4 text-black-50">Temperature: {data.temp}</p>
          <p className="fs-4 text-black-50">Humidity: {data.humditity}</p>
          <p className="fs-4 text-black-50">speed: {data.speed}</p>
          <p className="fs-4 mb-5  text-black-50">{data.aboutSky}</p>
        </div>
      </div>
    </div>
  );
};

export default InformationWeather;
