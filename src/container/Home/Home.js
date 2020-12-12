import React, { Component } from "react";
import Navbar from "../../component/Navbar/Navbar";
import classes from "./Home.module.css";
import mainIcon from "../../util/images/mainIcon.svg";
import SearchBar from "../../component/SearchBox/SearchBox";
import { connect } from "react-redux";
import { fetchStart } from "../../redux/actions/actionCreator";

class Home extends Component {
  state = {
    place: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.place !== "") {
      let data = {
        place: this.state.place,
      };
      this.props.fetchStart(data);
      this.props.history.push("/weather");
    } else {
      alert("City cannot be left blank!");
    }
  };
  render() {
    return (
      <div className={classes.main}>
        <Navbar />
        <div>
          <img className={classes.mainImageFirst} src={mainIcon} alt="Icon" />
          <img className={classes.mainImage} src={mainIcon} alt="Icon" />

          <div className={classes.text}>
            <span className={classes.heading1}>
              Welcome To Weather<span style={{ color: "Lightgreen" }}>Z</span>
            </span>
            <span className={classes.description}>Add the city below</span>

            <SearchBar
              className={classes.searchBox}
              name="place"
              pl="Search"
              value={this.state.city}
              changeHandler={this.changeHandler}
            />

            <button className={classes.button} onClick={this.onSubmitHandler}>
              Go
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  fetchStart: (data) => {
    dispatch(fetchStart(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
