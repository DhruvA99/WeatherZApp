import React, { Component } from "react";
import Navbar from "../../component/Navbar/Navbar";
import classes from "./WeatherView.module.css";
import Cloud1 from "../../util/images/Cloud1.svg";
import Cloud2 from "../../util/images/Cloud2.svg";
import { connect } from "react-redux";
import Loader from "../../component/Loader/Loader";

class WeatherView extends Component {
  dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };

  render() {
    let page = <Loader />;
    if (this.props.error) {
      page = <div>{this.props.error}</div>;
    }
    if (!this.props.loading && this.props.data === null) {
      page = (
        <div>
          <h1>Please Go Back to HomePage and try with a Valid City</h1>
        </div>
      );
    }

    if (!this.props.loading && this.props.data !== null) {
      page = (
        <div className={classes.main}>
          <div
            className={
              this.props.data.weather[0].main === "Rain" ||
              this.props.data.weather[0].main === "Drizzle"
                ? classes.mainRainy
                : this.props.data.main.temp < 16 ||
                  this.props.data.weather[0].main === "Haze" ||
                  this.props.data.weather[0].main === "Fog"
                ? classes.mainSnow
                : classes.mainSunny
            }
          ></div>
          <img className={classes.cloud1} src={Cloud1} alt="cloud" />
          <img className={classes.cloud2} src={Cloud2} alt="cloud" />
          <div className={classes.container}>
            <Navbar className={classes.nav} />
            {this.props.data ? (
              <div
                className={`${classes.card} ${
                  this.props.data.weather[0].main === "Rain" ||
                  this.props.data.weather[0].main === "Drizzle"
                    ? classes.backgroundRainy
                    : this.props.data.main.temp < 16 ||
                      this.props.data.weather[0].main === "Haze" ||
                      this.props.data.weather[0].main === "Fog"
                    ? classes.backgroundSnow
                    : classes.backgroundSunny
                }`}
              >
                <div className={classes.location}>
                  <span>
                    {this.props.data.name}, {this.props.data.sys.country}
                  </span>
                </div>
                <div className={classes.date}>
                  {this.dateBuilder(new Date())}
                </div>
                <div className={classes.weatherTemp}>
                  {Math.round(this.props.data.main.temp)} &#8451;
                </div>
                <div className={classes.weather}>
                  {this.props.data.weather[0].main}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      );
    }
    return <>{page}</>;
  }
}

const mapStateToProps = (state) => ({
  data: state.weath.data,
  loading: state.weath.loading,
  error: state.weath.error,
});

export default connect(mapStateToProps, null)(WeatherView);
