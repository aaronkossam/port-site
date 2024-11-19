import React from "react";
const Landpage = () => {
  return (
    <div className="bg  -mt-16 bg-no-repeat lg:h-screen   ">
      {/* //mobile// */}
      <p className=" font-extrabold text-4xl pl-1 pt-24  lg:hidden ">
        <p>Nice to</p>
        <p>meet you!</p>
        <p> I'm Aaron Kossam.</p>
        <hr className=" bg-green-400 w-60  h-1"></hr>
      </p>
      {/* /dektop// */}

      <p className=" font-extrabold text-4xl pl-1 pt-24 lg:pt-64  hidden lg:flex">
        Nice to meet you! I'm Aaron Kossam.
      </p>

      {/* <img src="/asset/tt.jpg" alt="" className="w-80" /> */}
      <p className=" pl-1 pt-2 pb-2">
        Based in the Ghana,I am Front-end web developer passionate about
        building accesible web-apps that users love.
      </p>
      <p className="  font-extrabold text-2xl  pl-1 pt-1  ">CONTACT ME</p>
      <hr className=" bg-green-400 w-36  ml-1 h-1  "></hr>
    </div>
  );
};

export default Landpage;
