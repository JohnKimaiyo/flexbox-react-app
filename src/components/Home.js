import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <p>
        <h1>Business Request</h1>
        <h2>Create a DYNAMIC Map Chart With Drop-Downe</h2>
      </p>

      <div className="card">
        <div classname="card-header"> DYNAMIC Map Chart With Drop-Down</div>
        <div className="card-body">
          This will display the DYNAMIC Map chart on googlesheet
        </div>
        <div className="card-footer">
          <button className="btn btn-outline">
            Click Here to Dynameic map on google sheeet
          </button>
        </div>
      </div>
    </div>
  );
}
