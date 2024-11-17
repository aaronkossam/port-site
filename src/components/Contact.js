import React from "react";

const Contact = () => {
  return (
    <div className=" bg-ttr">
      <h1 className=" text-4xl font-extrabold pt-9 text-center  font-title">
        Contact
      </h1>
      <p className=" text-center text-sm pl-1 pr-1 pb-4">
        <p> I would love to hera about your projects and how I</p>
        <p> would love to help. please fill in the form and i will get back</p>
        <p> to you as soon as possible.</p>
      </p>
      <form className=" grid justify-center">
        <input className=" bg-ttr" type=" text" placeholder=" NAME"></input>
        <input type=" text" placeholder=" EMAIL"></input>
        <input type=" text" placeholder=" MESSAGE"></input>
      </form>
    </div>
  );
};

export default Contact;
