import React, { memo } from "react";

const Header = memo((props) => {
  return (
    <header className="header">
      <i className="header-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="header-count">{props.totalCount}</span>
    </header>
  );
});

export default Header;
