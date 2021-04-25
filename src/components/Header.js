import { useState } from "react";

import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  const [toggleBtnTxt, setToggleBtnTxt] = useState(true);
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <Button
        color={toggleBtnTxt ? "green" : "red"}
        text={toggleBtnTxt ? "Add" : "Close"}
        onClick={() => {
          props.onAdd();
          setToggleBtnTxt(!toggleBtnTxt);
        }}
      />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
