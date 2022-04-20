import React from "react";
import UserData from "./UserDataCard";


class Listing extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
      page: 1,
    };
  }

  // ComponentDidMount is used to execute the code
  async componentDidMount() {
    let url = "https://reqres.in/api/users?page=1";
    let response = await fetch(url);
    let parsedData = await response.json();

    this.setState({
      items: parsedData.data,
      TotalPage: parsedData.total_pages,
      currentPageNo: parsedData.page,
      DataisLoaded: true,
    });
  }
  // Handling on click events
  handlePreviousClick = async () => {
    let url = `https://reqres.in/api/users?page=${this.state.page - 1}`;
    let response = await fetch(url);
    let parsedData = await response.json();

    this.setState({
      items: parsedData.data,
      TotalPage: parsedData.total_pages,
      currentPageNo: parsedData.page,
      DataisLoaded: true,
      page: this.state.page - 1,
    });

    console.log("previous");
  };
  handleNextClick = async () => {
    let url = `https://reqres.in/api/users?page=${this.state.page + 1}`;
    let response = await fetch(url);
    let parsedData = await response.json();

    this.setState({
      items: parsedData.data,
      TotalPage: parsedData.total_pages,
      currentPageNo: parsedData.page,
      DataisLoaded: true,
      page: this.state.page + 1,
    });

    console.log("next");
  };
  render() {
    // Helps to load data before rendering
    const { DataisLoaded, items, TotalPage, currentPageNo } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time Loading.... </h1>{" "}
        </div>
      );

    return (
      <div className="container my-3 ">
        <h1 className="d-flex justify-content-center">
          Welcome To Profile Dashboard
        </h1>
        {/* For Card */}
        <div className="row">
          {items.map((item) => (
            <div className="col-md-4">
              <UserData
                id={item.id}
                User_Email={item.email}
                F_Name={item.first_name}
                L_Name={item.last_name}
                avatar={item.avatar}
              />
            </div>
          ))}
        </div>
        {/* For Next Previous Button */}
        <div
          className="container d-flex justify-content-between"
          style={{ display: "block", padding: 30 }}
        >
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <h6>Page Number is {currentPageNo}</h6>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}
            disabled={this.state.page >= TotalPage}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default Listing;
