import React, { useState } from "react";
import "../App.css";

//Destructuring the props comming from parent component i.e App.js
function Drop({ options }) {
  // state that shows the selected option
  const [selected, setSelected] = useState("");

  // state that shows and hides the dropdown (if false then not display true then diaplayed)
  const [display, setDisplay] = useState(false);

  // Function which changes the "selected" state according to the user selection and also hides the dropdown menu once user had selected the list item

  const showSelectedOption = (e) => {
    setSelected(e.target.innerText);
    setDisplay(false);
  };

  let menuItems = [];

  if (options) {
    menuItems = options.map((item) => {
      return <li onClick={showSelectedOption}>{item}</li>;
    });
  }

  return (
    <div className="dropdrown">
      {/* on mouse hover we set the display of dropdown items as true */}
      <div onMouseEnter={() => setDisplay(true)} className="dropdown-menu">
        <span>Selected and option </span>
      </div>

      {/* Drop down items which display only when display is true
      Items are comming from the parent components as props */}

      {display ? <ul className="menu-items">{menuItems}</ul> : ""}

      {/* for the first time when the user enters the side then selected is black so nothing is displayed */}

      {selected !== "" ? (
        <h3 className="selected-option">Selected Option :{selected}</h3>
      ) : (
        ""
      )}
    </div>
  );
}

export default Drop;
