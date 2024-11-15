import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Nav = () => {
  return (
    <div className=" flex justify-between p-3">
      <p className=" text-2xl  font-extrabold text-text">akossam</p>

      <div className="flex gap-3 text-text ">
        <a href="https://github.com/aaronkossam">
          {" "}
          <FaLinkedin className=" text-xl" />
        </a>

        <a href="https://github.com/aaronkossam">
          {" "}
          <FaGithub className=" text-xl" />
        </a>
        <a href="https://github.com/aaronkossam">
          {" "}
          <FaTwitter className=" text-xl" />
        </a>
        <a href="https://github.com/aaronkossam">
          {" "}
          <FaInstagram className=" text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
