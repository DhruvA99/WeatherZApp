import React from "react";
import classes from "./SearchBox.module.css";

const SearchBar = (props) => {
  return (
    <input
      className={classes.input}
      name={props.name}
      type="text"
      value={props.value}
      placeholder={props.pl}
      onChange={(e) => props.changeHandler(e)}
    />
  );
};

export default SearchBar;
