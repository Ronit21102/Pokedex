import React from "react";
import Wrapper from "../sections/Wrapper";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img
        src="images/ronit.png"
        alt=""
        className="profile-image "
        style={{ objectFit: "cover" }}
      />
      <h1 className="profile-text">Hi I am Ronit Roushan</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>

      <div className="profile-links">
        <a href="https://github.com/Ronit21102">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ronit-roushan-460a9b194/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
