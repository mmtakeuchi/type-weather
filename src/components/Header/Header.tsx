import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header-container">
      <h2>TypeWeather</h2>
      <a href="https://github.com/mmtakeuchi/type-weather">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
    </div>
  );
};

export default Header;
