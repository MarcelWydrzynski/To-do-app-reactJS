import React from "react";
import "./Header.scss";

const Header = () => {
  let today = new Date(); // get the date
  let day = ("0" + today.getDate()).slice(-2); //get day with slice to have double digit day
  let month = ("0" + (today.getMonth() + 1)).slice(-2); //get your zero in front of single month digits so you have 2 digit months
  let date = month + "/" + day + "/" + today.getFullYear();

  return (
    <>
      <header className="header">
        <h1>Todo</h1>
        <div className="date-container">
          <span><strong>Today</strong></span>
          <span>{date}</span>
        </div>
      </header>
    </>
  );
};

export default Header;
