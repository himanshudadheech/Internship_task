import React, { Component } from "react";

export default class UserData extends Component {
  render() {
    let { id, F_Name, L_Name, User_Email, avatar } = this.props;
    return (
      <>
        <div className=" container d-flex justify-content-center p-2">
          <div className="card" style={{ width: "14rem" }}>
            <img alt="" src={avatar} />
            <div className="card-body">
              <h6 className="card-title">User Id : {id}</h6>
              <p className="card-text">
                Name : {F_Name} {L_Name}
              </p>

              <p className="card-text">Email : {User_Email}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
