"use client";

import React from "react";
import "../../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function App({ params }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendInvite = async (data) => {
    const response = await axios.post(
      `http://localhost:8000/api/invite_player/${params.teamID}`,
      {
        email: data.email,
      }
    );
  };

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
              <div className="card-header">Add players to Squad</div>
              <div className="card-body">
                <p style={{ fontSize: "0.9rem" }}>
                  Enter the email address of the player you wish to invite to
                  your squad. They will be sent an invite link which will allow
                  them to enter their details.
                </p>
                <form onSubmit={handleSubmit(sendInvite)}>
                  <div className="row gx-3 mb-3">
                    <div className="col">
                      <input
                        className="form-control"
                        id="inputOrgName"
                        type="text"
                        placeholder="Enter Email"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <span style={{ color: "red" }}>
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="btn btn-success" type="submit">
                    Send invite Link
                  </button>
                  <span className="mx-3">or</span>
                  <a href="/add_player">
                    <button className="btn btn-primary" type="button">
                      Add Player Manually
                    </button>
                  </a>
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
