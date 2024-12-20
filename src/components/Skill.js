import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
const Skill = () => {
  return (
    <div className=" bg-primary">
      <hr className=" h-3 ml-3 mr-3 mb-3 mt-3 lg:mt-0 lg:-mt-40 lg:ml-28 lg:mr-28"></hr>

      <ul className=" grid grid-cols-2  gap-4 ml-16  pb-8 lg:grid-cols-3 lg:ml-24 lg:mt-2  ">
        <a href="https://github.com/aaronkossam">
          {" "}
          <FaReact className=" text-8xl " />
        </a>

        <a href="https://github.com/aaronkossam">
          {" "}
          <FaHtml5 className=" text-8xl " />
        </a>
        <a href="https://github.com/aaronkossam">
          {" "}
          <FaCss3 className="text-8xl " />
        </a>
        <a href="https://github.com/aaronkossam">
          {" "}
          <RiTailwindCssFill className=" text-8xl " />
        </a>
        <a href="https://github.com/aaronkossam">
          {" "}
          <RiNextjsFill className=" text-8xl " />
        </a>
        <a href="https://github.com/aaronkossam">
          {" "}
          <FaPython className=" text-8xl " />
        </a>
      </ul>
    </div>
  );
};

export default Skill;
