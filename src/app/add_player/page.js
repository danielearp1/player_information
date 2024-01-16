"use client";

import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div className="container-xl px-4 mt-4">
        <nav className="nav nav-borders">
          <a className="nav-link" href="/add_player">
            Cancun 2024 - Register Details
          </a>
        </nav>
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">England</div>
              <div className="card-body text-center">
                <img
                  src="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg"
                  width="200"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Players Details</div>
              <div className="card-body">
                <form>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-4">
                      <label className="small mb-1">First name</label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div className="col-md-4">
                      <label className="small mb-1">Last name</label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="small mb-1">Nickname (Optional)</label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter a nickname"
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1">Email</label>
                      <input
                        className="form-control"
                        id="inputOrgName"
                        type="text"
                        placeholder="Enter your Email"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1">Phone Number</label>
                      <input
                        className="form-control"
                        id="inputLocation"
                        type="text"
                        placeholder="Enter your location"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="small mb-1">Preferred Foot</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="1">Left</option>
                        <option value="2">Right</option>
                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="small mb-1">Preferred Position</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="1">Goalkeeper</option>
                        <option value="2">Defender</option>
                        <option value="2">Midfielder</option>
                        <option value="2">Striker</option>
                      </select>
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1">Date of birth</label>
                      <input
                        className="form-control"
                        id="inputBirthday"
                        type="date"
                        name="birthday"
                        placeholder="Age (Years)"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1">Occupation</label>
                      <input
                        className="form-control"
                        id="occupation"
                        type="input"
                        name="birthday"
                        placeholder="Occupation"
                      />
                    </div>
                  </div>

                  <label className="form-label">Upload Player image</label>
                  <input
                    className="form-control form-control-md mb-3"
                    id="formFileMd"
                    type="file"
                  />

                  <p className="m-0">Photo guidelines:</p>
                  <p className="m-0" style={{ fontSize: "0.9rem" }}>
                    - A clear, in focus, front facing photo
                  </p>
                  <p className="m-0 mb-4" style={{ fontSize: "0.9rem" }}>
                    - Plain light coloured background
                  </p>

                  <button className="btn btn-primary" type="button">
                    Submit Details
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
