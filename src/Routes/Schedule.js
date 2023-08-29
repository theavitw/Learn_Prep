import React, { Component } from "react";
import "../Style.css";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import { NavLink } from "react-router-dom";
const nthNumber = (number) => {
  if (number > 3 && number < 21) return "th";
  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
export const date = [
  {
    day: "",
    month: "",
    year: "",
    time: "",
  },
];
class App extends Component {
  now = new Date();

  handleOptionChange = (option) => {
    this.setState({
      selectedOption: option,
    });
  };
  constructor(props) {
    super(props);
    this.state = { year: null, month: null, day: null, selectedOption: null };
  }
  get Date() {
    return {
      year: this.state.year,
      month: new Intl.DateTimeFormat("en-US", { month: "long" }).format(
        new Date(this.state.year, this.state.month)
      ),
      day: this.state.day + nthNumber(this.state.day),
    };
  }
  checkdate() {
    if (this.state.month < this.now.getMonth()) {
      return false;
    } else if (this.state.month == this.now.getMonth()) {
      if (Number(this.state.day) <= this.now.getDate()) {
        return false;
      }
    }

    return true;
  }

  render() {
    const { selectedOption } = this.state;
    date.day = this.Date.day;
    date.month = this.Date.month;
    date.year = this.Date.year;
    date.time = this.state.selectedOption;
    return (
      <>
        <div className="date_main date aside">
          <h2>Pick an appropriate Slot</h2>
          <div className="Picker">
            <DayPicker
              defaultValue={"DD"}
              year={this.state.year}
              month={this.state.month}
              endYearGiven
              value={this.state.day}
              onChange={(day) => {
                this.setState({ day });
              }}
              id={"day"}
              name={"day"}
              classes={"classes"}
              optionClasses={"option classes"}
            />

            <MonthPicker
              defaultValue={"MM"}
              value={this.state.month}
              onChange={(month) => {
                this.setState({ month });
              }}
              id={"month"}
              name={"month"}
              classes={"classes"}
              optionClasses={"option classes"}
            />

            <YearPicker
              defaultValue={"YYYY"}
              start={2023}
              end={2023}
              value={this.state.year}
              onChange={(year) => {
                this.setState({ year });
              }}
              id={"year"}
              name={"year"}
              classes={"classes"}
              optionClasses={"option classes"}
            />
          </div>
          {this.state.year &&
            this.state.month &&
            this.state.day &&
            this.checkdate() && (
              <>
                {" "}
                <div className="result">
                  <p>
                    Showing Slots For{" "}
                    <span>
                      {this.Date.day} {this.Date.month} {this.Date.year}
                    </span>
                  </p>
                </div>
                <div className="selectdate">
                  <div className=" ">
                    <div className="mb_2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 14.6875C12.5888 14.6875 14.6875 12.5888 14.6875 10C14.6875 7.41117 12.5888 5.3125 10 5.3125C7.41117 5.3125 5.3125 7.41117 5.3125 10C5.3125 12.5888 7.41117 14.6875 10 14.6875Z"
                          stroke="#616161"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 2.8125V1.25"
                          stroke="#616161"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.91406 4.91406L3.8125 3.8125"
                          stroke="#616161"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.8125 10H1.25"
                          stroke="#616161"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.91406 15.0859L3.8125 16.1875"
                          stroke="#616161"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 17.1875V18.75"
                          stroke="#616161"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.0859 15.0859L16.1875 16.1875"
                          stroke="#616161"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.1875 10H18.75"
                          stroke="#616161"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.0859 4.91406L16.1875 3.8125"
                          stroke="#616161"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="mb_1">Morning</div>
                      <div className="mb_0">3 Slots</div>
                    </div>
                    <div>
                      <div className="mb_4">
                        <button
                          className={`option-button ${
                            selectedOption === "11:00 AM" ? "selected" : ""
                          }`}
                          onClick={() => this.handleOptionChange("11:00 AM")}
                        >
                          11:00 AM
                        </button>
                        <button
                          className={`option-button ${
                            selectedOption === "11:15 AM" ? "selected" : ""
                          }`}
                          onClick={() => this.handleOptionChange("11:15 AM")}
                        >
                          11:15 AM
                        </button>
                        <button
                          className={`option-button ${
                            selectedOption === "11:45 AM" ? "selected" : ""
                          }`}
                          onClick={() => this.handleOptionChange("11:45 AM")}
                        >
                          11:45 AM
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className=" ">
                    <div className="mb_2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.25 4.60938L6.64844 3.16406"
                          stroke="#909090"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.35938 8.5L1.91406 7.89844"
                          stroke="#909090"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.6406 8.5L18.0859 7.89844"
                          stroke="#909090"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.75 4.60938L13.3516 3.16406"
                          stroke="#909090"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.75 12.5H1.25"
                          stroke="#909090"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.25 15.625H3.75"
                          stroke="#909090"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.48438 12.5C5.29042 11.8036 5.26015 11.0718 5.39595 10.3618C5.53174 9.65174 5.82992 8.98274 6.26717 8.40706C6.70441 7.83139 7.26888 7.36465 7.91644 7.04333C8.564 6.72201 9.2771 6.55481 10 6.55481C10.7229 6.55481 11.436 6.72201 12.0836 7.04333C12.7311 7.36465 13.2956 7.83139 13.7328 8.40706C14.1701 8.98274 14.4683 9.65174 14.6041 10.3618C14.7398 11.0718 14.7096 11.8036 14.5156 12.5"
                          stroke="#909090"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <div className="mb_1">Afternoon</div>
                      <div className="mb_0">6 Slots</div>
                    </div>
                    <div>
                      <div className="mb_4">
                        {/* Your buttons/radio options */}
                        <button
                          className={`option-button ${
                            selectedOption === "12:30 PM" ? "selected" : ""
                          }`}
                          onClick={() => this.handleOptionChange("12:30 PM")}
                        >
                          12:30 PM
                        </button>
                        <button
                          className={`option-button ${
                            selectedOption === "12:45 PM" ? "selected" : ""
                          }`}
                          onClick={() => this.handleOptionChange("12:45 PM")}
                        >
                          12:45 PM
                        </button>
                        <button
                          className={`option-button ${
                            selectedOption === "1:00 PM" ? "selected" : ""
                          }`}
                          onClick={() => this.handleOptionChange("1:00 PM")}
                        >
                          1:00 PM
                        </button>
                        <button
                          className={`option-button ${
                            selectedOption === "1:15 PM" ? "selected" : ""
                          }`}
                          onClick={() => this.handleOptionChange("1:15 PM")}
                        >
                          1:15 PM
                        </button>
                        <button
                          className={`option-button ${
                            selectedOption === "1:30 PM" ? "selected" : ""
                          }`}
                          onClick={() => this.handleOptionChange("1:30 PM")}
                        >
                          1:30 PM
                        </button>
                        <button
                          className={`option-button ${
                            selectedOption === "1:45 PM" ? "selected" : ""
                          }`}
                          onClick={() => this.handleOptionChange("1:45 PM")}
                        >
                          1:45 PM
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className=" ">
                    <div className="mb_2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Moon">
                          <path
                            id="Vector"
                            d="M16.9297 11.9219C15.7026 12.266 14.406 12.2772 13.1731 11.9545C11.9402 11.6318 10.8155 10.9868 9.91432 10.0856C9.01317 9.1845 8.36813 8.05973 8.04543 6.82684C7.72273 5.59396 7.734 4.2974 8.0781 3.07031C6.8683 3.40704 5.76785 4.05486 4.88633 4.94924C4.00482 5.84363 3.37303 6.95336 3.05387 8.16791C2.73472 9.38246 2.73934 10.6594 3.06729 11.8716C3.39524 13.0838 4.03507 14.189 4.92304 15.0769C5.81101 15.9649 6.91614 16.6047 8.12834 16.9327C9.34054 17.2606 10.6175 17.2653 11.8321 16.9461C13.0466 16.6269 14.1563 15.9951 15.0507 15.1136C15.9451 14.2321 16.5929 13.1317 16.9297 11.9219V11.9219Z"
                            stroke="#909090"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </svg>

                      <div className="mb_1">Evening</div>
                      <div className="mb_0">4 Slots</div>
                    </div>
                    <div>
                      <div className="mb_4">
                        <button
                          className={`option-button ${
                            selectedOption === " 7:15 PM" ? "selected" : ""
                          }`}
                          onClick={() => this.handleOptionChange("7:15 PM")}
                        >
                          7:15 PM
                        </button>
                        <button
                          className={`option-button ${
                            selectedOption === "11:15 PM" ? "selected" : ""
                          }`}
                          onClick={() => this.handleOptionChange("11:15 PM")}
                        >
                          11:15 PM
                        </button>
                        <button
                          className={`option-button ${
                            selectedOption === "11:45 PM" ? "selected" : ""
                          }`}
                          onClick={() => this.handleOptionChange("11:45 PM")}
                        >
                          11:45 PM
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {selectedOption && (
                  <div className="result">
                    <p>
                      Slot Selected -
                      <span className="text-decoration-underline">
                        {this.Date.day} {this.Date.month}, {this.Date.year} at{" "}
                        {selectedOption}
                      </span>
                    </p>
                    <NavLink
                      to="./Schedule2.js"
                      onClick={this.handleBookAppointment}
                      className="text-white text-decoration-none w-100"
                    >
                      <button className="sd_2 sd_3 w-100">
                        Book Appointment
                      </button>
                    </NavLink>
                  </div>
                )}
              </>
            )}
          {this.state.year &&
            this.state.month &&
            this.state.day &&
            !this.checkdate() &&
            Number(this.state.day) !== this.now.getDate() && (
              <p style={{ color: "red", textAlign: "center" }}>
                * You Entered a Past Date
              </p>
            )}
          {this.state.year &&
            this.state.month &&
            this.state.day &&
            this.state.month == this.now.getMonth() &&
            Number(this.state.day) === this.now.getDate() && (
              <p style={{ color: "red", textAlign: "center" }}>
                * You can not book appointment for today
              </p>
            )}
        </div>
      </>
    );
  }
}

export default App;
