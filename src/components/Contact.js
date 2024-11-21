import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Contact = () => {
  return (
    <div className=" bg-ttr">
      {/* {mobile} */}
      {/* <div className=" lg: hidden">
        <h1 className=" text-4xl font-extrabold pt-9 text-center  font-title">
          Contact
        </h1>
        <p className=" text-center text-sm pl-1 pr-1 pb-4">
          <p> I would love to hera about your projects and how I</p>
          <p>
            {" "}
            would love to help. please fill in the form and i will get back
          </p>
          <p> to you as soon as possible.</p>
        </p>
        <form className=" grid justify-center pt-5">
          <input
            className=" bg-ttr pb-2  pr-36 outline-none  font-title    mb-5"
            type=" text"
            placeholder=" NAME"
            style={{ borderBottom: "0.1rem solid #E4E0E1" }}
          ></input>

          <input
            className=" bg-ttr pb-2  pr-36 outline-none  font-title    mb-3"
            style={{ borderBottom: "0.1rem solid #E4E0E1" }}
            type=" text"
            placeholder=" EMAIL"
          ></input>

          <input
            className=" bg-ttr pb-12  pr-36 outline-none  font-title    mb-3"
            style={{ borderBottom: "0.1rem solid #E4E0E1" }}
            type=" text"
            placeholder=" MESSAGE"
          ></input>
        </form>
        <div className=" pb-7">
          <p className="   font-extrabold text-xl  pl-1 pt-1 mt-2 ml-52 ">
            SEND MESSAGE
          </p>
          <hr className=" bg-green-400 w-36   h-1  ml-52 "></hr>
        </div>

        <hr className=" mr-7 ml-7 mb-5"></hr>
        <div className=" flex justify-between p-3 mb-5 mt-2">
          <p className=" text-2xl  font-extrabold text-text">akossam</p>

          <div className="flex gap-3 text-text mb-4  ">
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
      </div> */}

      {/* {destop} */}

      <div className=" hidden lg:grid grid-cols-2 pt-7">
        <div>
          <div>
            <h1 className=" text-4xl font-extrabold pt-9 text-center  font-title">
              Contact
            </h1>

            <p className=" text-center text-sm pl-1 pr-1 pb-4">
              <p> I would love to hera about your projects and how I</p>
              <p>
                {" "}
                would love to help. please fill in the form and i will get back
              </p>
              <p> to you as soon as possible.</p>
            </p>
          </div>
        </div>

        <div>
          <form className=" grid justify-center pt-5">
            <input
              className=" bg-ttr pb-2  pr-36 outline-none  font-title    mb-5"
              type=" text"
              placeholder=" NAME"
              style={{ borderBottom: "0.1rem solid #E4E0E1" }}
            ></input>

            <input
              className=" bg-ttr pb-2  pr-36 outline-none  font-title    mb-3"
              style={{ borderBottom: "0.1rem solid #E4E0E1" }}
              type=" text"
              placeholder=" EMAIL"
            ></input>

            <input
              className=" bg-ttr pb-12  pr-36 outline-none  font-title    mb-3"
              style={{ borderBottom: "0.1rem solid #E4E0E1" }}
              type=" text"
              placeholder=" MESSAGE"
            ></input>
            <div className=" pb-7 mb-5 ">
              <p className="   font-extrabold text-xl  pl-1 pt-1 mt-2 ml-52 ">
                SEND MESSAGE
              </p>
              <hr className=" bg-green-400 w-36   h-1  ml-52 "></hr>
            </div>
          </form>
        </div>
      </div>
      <hr className=" mr-44 ml-40 mb-5"></hr>

      <div className=" flex justify-between  mr-40 ml-40 pb-9 ">
        <p className=" text-2xl  font-extrabold text-text">akossam</p>

        <div className="flex gap-3 text-text mb-4  ">
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
    </div>
  );
};

export default Contact;
