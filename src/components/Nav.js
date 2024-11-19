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
        <a href="https://www.linkedin.com/in/aaron-kossam-7950861a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
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
        <a href="https://www.instagram.com/aaronkossam?igsh=MW10dHAxb3dwNTlqYw%3D%3D&utm_source=qr">
          {" "}
          <FaInstagram className=" text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
