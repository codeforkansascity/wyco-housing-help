import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InfoIcon from "@material-ui/icons/Info";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{ minWidth: "300px" }}
    >
      <BottomNavigationAction
        label="Search"
        component={Link}
        to="/search"
        value="search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="About"
        component={Link}
        to="/about"
        value="about"
        icon={<InfoIcon />}
      />
    </BottomNavigation>
  );
};

export default NavMenu;
