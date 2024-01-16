"use client";

import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div className="container-xl px-4 mt-4">
        <nav className="nav nav-borders">
          <a className="nav-link ms-0" href="/">
            Squad
          </a>
          <a className="nav-link" href="/invite_player">
            Invite Player
          </a>
        </nav>
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col">
            <div className="card mb-4">
              <div className="card-header">Invite Players to squad</div>
              <div className="card-body">
                <p style={{ fontSize: "0.9rem" }}>
                  Enter the email address of the player you wish to invite to
                  your squad. They will be sent an invite link which will allow
                  them to enter their details.
                </p>
                <form>
                  <div className="row gx-3 mb-3">
                    <div className="col">
                      <input
                        className="form-control"
                        id="inputOrgName"
                        type="text"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>

                  <button className="btn btn-primary" type="button">
                    Send invite Link
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
