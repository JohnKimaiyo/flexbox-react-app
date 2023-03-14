import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div clssName="card-grid">
      <div className="card">
        <div classname="card-header">
          Business Request for DYNAMIC Map Chart
        </div>
        <div className="card-body">
          This will display the DYNAMIC Map chart businessRequst microsftword
          documents
        </div>
        <div className="card-footer">
          <a
            className="App-link"
            href="https://docs.google.com/spreadsheets/d/1ETQQwPaX8kMLgqIBLBulHTQiVk_nMf0rXOLxm4UnLko/edit#gid=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the Dashboard Here
          </a>
        </div>
      </div>

      <div className="card">
        <div classname="card-header">
          {" "}
          DYNAMIC Map Chart With Drop-Down Googlesheet Display
        </div>
        <div className="card-body">
          This will display the DYNAMIC Map chart on googlesheet
        </div>
        <div className="card-footer">
          <a
            className="App-link"
            href="https://docs.google.com/spreadsheets/d/1ETQQwPaX8kMLgqIBLBulHTQiVk_nMf0rXOLxm4UnLko/edit#gid=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the Dashboard Here
          </a>
        </div>
      </div>
      <div className="card">
        <div classname="card-header">
          {" "}
          DYNAMIC Map Chart With Drop-Down Excel File
        </div>
        <div className="card-body">This will provide the download file</div>
        <div className="card-footer">
          <a
            className="App-link"
            href="https://docs.google.com/spreadsheets/d/1ETQQwPaX8kMLgqIBLBulHTQiVk_nMf0rXOLxm4UnLko/edit#gid=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to download the excel file
          </a>
        </div>
      </div>
      <div className="card">
        <div classname="card-header">
          {" "}
          DYNAMIC Map Chart With Drop-Down MicrosoftPowerBI Published report
        </div>
        <div className="card-body">
          This will provide the PDF published report
        </div>
        <div className="card-footer">
          <a
            className="App-link"
            href="https://docs.google.com/spreadsheets/d/1ETQQwPaX8kMLgqIBLBulHTQiVk_nMf0rXOLxm4UnLko/edit#gid=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to download the pdf
          </a>
        </div>
      </div>
    </div>
  );
}
