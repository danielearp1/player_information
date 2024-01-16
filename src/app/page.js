"use client";

import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

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
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Cancun 2024 - England</div>
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
              <div className="card-header">
                Current Squad - 3 Players Registered
              </div>
              <div className="card-body">
                <Card className="mb-3">
                  <Card.Body>
                    David Jones <i className="bi bi-x-square-fill"></i>
                  </Card.Body>
                </Card>
                <Card className="mb-3">
                  <Card.Body>John Smith</Card.Body>
                </Card>
                <Card className="mb-3">
                  <Card.Body>Steven Adams</Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
